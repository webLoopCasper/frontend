import { unstable_noStore as noStore } from 'next/cache';
import qs from 'qs';
import { flattenAttributes } from '@/lib/utils';
import { getStrapiURL } from '@/lib/utils';

let base = getStrapiURL();

async function fetchData(url) {
    noStore();
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };


  try {
    const response = await fetch(url,authToken ? headers : {});
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
}

export async function getHomepageDataMeta(){
    const hompage = qs.stringify({
        populate:true,
    })
    
    let url = new URL("/api/forside",base);
    url.search = hompage;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}

export async function getHomepageData(){
    const hompage = qs.stringify(
    {
        populate:{
            ForsideBody:{
                populate:{
                    images:{
                        fields: ["url"] 
                    }
                }
            }
        }
    })
    
    let url = new URL("/api/forside",base);
    url.search = hompage;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}




export async function getGlobalData(){
    const global = qs.stringify({
        populate:true,
    })
    
    let url = new URL("/api/global",base);
    url.search = global;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}
