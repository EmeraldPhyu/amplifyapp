// import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';

// Amplify.configure(aws_exports);

//Below codes are graphQL working job posting 

// import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Authenticator,
  Flex,
  Grid,
  useTheme
} from "@aws-amplify/ui-react";
import './App.css';

import { SignInBackground } from "./Login/SignInBackground";

import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listJobPosts } from './graphql/queries';
import { createJobPost as createJobPostMutation, deleteJobPost as deleteJobPostMutation } from './graphql/mutations';

const components = {
  // SignIn: {
  //   Header: SignInBackground
  // }
};

const initialFormState = { name: '', description: '' }

function App() {
  const [job, setJobPost] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchJobPost();
  }, []);

  async function fetchJobPost() {
    const apiData = await API.graphql({ query: listJobPosts });
    setJobPost(apiData.data.listJobPosts.items);
  }

  async function createJobPost() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createJobPostMutation, variables: { input: formData } });
    setJobPost([ ...job, formData ]);
    setFormData(initialFormState);
  }

  async function deleteJobPost({ id }) {
    const newJobArray = job.filter(note => note.id !== id);
    setJobPost(newJobArray);
    await API.graphql({ query: deleteJobPostMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>My Joblisting</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Job title"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Job description"
        value={formData.description}
      />
      <button onClick={createJobPost}>Create Job</button>
      <div style={{marginBottom: 30}}>
        {
          job.map(job => (
            <div key={job.id || job.name}>
              <h2>{job.name}</h2>
              <p>{job.description}</p>
              <button onClick={() => deleteJobPost(job)}>Delete job</button>
            </div>
          ))
        }
      </div>
       <Authenticator components={components}>
          {({ signOut, user }) => (
            <main>
              {/* <h1>Hello {user.username}</h1> */}
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        </Authenticator>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

//Original 
// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <Image src={logo} className="App-logo" alt="logo" />
//         <Heading level={1}>You are Authenticated! Now we are at Gurucool Landing Page</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }

export default withAuthenticator(App);
