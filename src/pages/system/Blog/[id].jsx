import Head from 'next/head'

import Navbar from '@/components/common/Navbar';
import { Box, Image } from '@chakra-ui/react';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';
import { useState, useEffect } from 'react';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
    const [loading, setLoading] = useState(true)
    const [newData, setNewData] = useState({})
    const [newObj, setNewObj] = useState({})

  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('../../api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  	useEffect(()=>{
		  if (!data || typeof(data) == "undefined" || null ) {
        console.log("ran ere")
        setLoading(true)
      }
      else if(typeof(data) == "string"){
        console.log("ran whrere")
        setLoading(true)
        setNewData(data)
      }
        

	}, [data])
useEffect(()=>{
  if(typeof(newData) == "object"){
    setLoading(true)
    console.log("am empty")
  }
  else if(typeof(newData) == "string"){
    setLoading(false)
    setNewObj(JSON.parse(newData))
  }
	}, [newData])
  
  
    console.log(newObj)


  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
            <Head>
                <title>Blog details</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {
                loading ? (
                    <div>loading... </div>
                ) : (
                    <div>
                      {
                        newObj.record.name
                      }
                    </div>
                )
            }

    </div>
  );
}


