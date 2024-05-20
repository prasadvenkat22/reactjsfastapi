import React ,  {useEffect, useState} from "react"
import axios from 'axios'


interface users
{
  email: string
  id: number
  disabled: boolean
  application: string
  name: string
  hashed_password: string
  created_date: Date
  role: string
}

export function Home() {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] =useState<users[]>([]);
  useEffect ( () => {
                    setLoading (true);

                    axios.get<users[]>(  'http://165.227.97.62:8000/CRUD/users/?skip=0&limit=100')
                      .then((response) =>setUsers( response.data)).catch
                      (err => console.log(err));
                      setLoading (false);
                    },[]);
                    
                    if (isLoading) {
                      return <div> Loading ...</div>;
                    }

                    return (
                      <>
                      <div className="Home">
                        <h1 className="mb-4 text-2xl"> Data AI </h1>

                      </div>
                      <h2> Data Driven Generative AI</h2>
                      <h3> Application using our AI features</h3>
                      <table className="table table-striped table-bordered table-hover" > 
                      
                          <thead>
                              <tr>
                                <th> name  </th>
                                <th> email  </th>
                                <th> application  </th>
                                <th> created_date  </th>

                              </tr>
                            </thead>
                            <tbody>
                              {

                                users.map( (users) =>  (  
                                      <tr key={(users.id)}>
                                          <td> {users.name}</td>
                                          <td> {users.email}</td>
                                          <td> {users.application}</td>
                                          <td> {users.created_date.toString()}</td>

                                      </tr>
                                ) 
                                )

                              }
                            </tbody>
                      </table>
                      </>
                    )

            
}
