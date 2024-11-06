import * as React from "react";
import { useMsal } from '@azure/msal-react';
// import {
//     IconArrowCollapse,
//     IconArrowExpand,
//     IconFileQuestion,
//   } from "@convergepoint/icons";
// local import:
// import { Heading } from "../Global/Heading/Heading"
import UILayout from "../PageLayout/UILayout"
import {accessToken} from "./Token.tsx";
function Home() { 
const [data, setData] = React.useState(null);
const [loading, setLoading] = React.useState(true);
const [error, setError] = React.useState(null);

const { instance } = useMsal();


console.log('instance', instance)
React.useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await fetch('https://cmspfxapp.azurewebsites.net/License/LoadData', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  fetchData();
},[]);
if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
 
return (
    <UILayout>
    <div className="wrapper mt-3">
      <h1>hai</h1>
      <p>home</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </UILayout>
  )
}

export default Home
