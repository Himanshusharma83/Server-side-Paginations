import React,{useState,useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import './App.css';
 
function Data(){
    const[user,setUser] = useState([]);

    const columns = [
        {dataField:'id',text:'id'},
        {dataField:'title',text:'Title'},
        {dataField:'userId',text:'UserId'},
        {dataField:'completed',text:'Completed'},
    ]
    const pagination = paginationFactory({
        page:1,
        sizePerPage:12,
        lastPageText:'>>',
        fistPageText:'<<',
        nextPageText:'next',
        prePageText:'pre',
        showTotal:true,
        alwaysShowAllBtns:true,
        onPageChange:function(page,sizePerPage){
            console.log('Page',page);
            console.log('Size Of Page',sizePerPage);
        },
        onSizePerPageChange:function(page,sizePerPage){
            console.log('page',page);
        }
    })

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(result => setUser(result))
        .catch(error => console.log("error"));
    },[])
    return(
        <div>
            <BootstrapTable  bootstrap4 keyField='id'columns={columns} data={user} pagination={pagination}>

            </BootstrapTable>
           {/*
           <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    </tr>
                    {
                        user && user.length > 0  ?
                        user.map(usr=>
                            <tr>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                        </tr>
                            )
                            : 'Loading'
                    }
            </table>
           */ } 
            </div>
    )
        
    }
export default Data;