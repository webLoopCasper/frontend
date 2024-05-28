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
                        fields: ["url","alternativeText"] 
                    },
                    link:{
                        populate:true
                    },
                    image:{
                        fields: ["url","alternativeText"]
                    },
                    card:{
                        populate:{
                            image:{
                                fields:["url","alternativeText"]
                            }
                        }
                       
                    }

                }
            }
        }
    }
    )
    
    let url = new URL("/api/forside",base);
    url.search = hompage;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}




export async function getGlobalData(){
    const global = qs.stringify({
        populate:{
            header:{
                populate:{
                    logoLink:{
                        populate:true
                    },
                    contactLink:{
                        populate:true
                    }
                }
            }
        }
    })
    
    let url = new URL("/api/global",base);
    url.search = global;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}




export async function getOmOsData(){
    const global = qs.stringify({
        populate:{
            omOsBody:{
                populate:{
                    image:{
                        fields: ["url","alternativeText"]
                    }
                }
            }
        }
    }) 
    
    
    let url = new URL("/api/om-os",base);
    url.search = global;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}




export async function getKontaktOsData(){
    const global = qs.stringify({
        populate:{
            KontaktOsBody:{
                populate:{
                    image:{
                        fields: ["url","alternativeText"]
                    }
                }
            }
        }
    }) 
    
    let url = new URL("/api/kontakt-os",base);
    url.search = global;
    let data = flattenAttributes(await fetchData(url.href));
    return data;
}
