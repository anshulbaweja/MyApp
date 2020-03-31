import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BootstrapTable from 'react-bootstrap-table-next';
// import  filterFactory,{ textFilter } from 'react-bootstrap-table2-filter'; 


class  TableData extends React.Component {
    render() {
        const  state = {
            products: [
              {
                id: 1,
                name: 'TV',
                'price': 1000
              },
              {
                id: 2,
                name: 'Mobile',
                'price': 500
              },
              {
                id: 3,
                name: 'Book',
                'price': 20
              },
            ],
            columns: [{
              dataField: 'id',
              text: 'Product ID'
            },
            {
              dataField: 'name',
              text: 'Product Name',
            //   filter: textFilter()  
            }, {
              dataField: 'price',
              text: 'Product Price',
              sort: true
            }]
          }
    
      return (
        <div className="container" style={{ marginTop: 50 }}>
          <BootstrapTable 
          striped
          searching={true}
          hover
          keyField='id' 
          data={ state.products } 
          columns={ state.columns } />
        </div>
      );
      }
  }
  
  export default TableData;