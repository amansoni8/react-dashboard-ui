import React from 'react';
import './TableLayout.css'; // Import the CSS file for styling
import SearchComponent from './Search';
import './SearchComponent.css';
import abstract from './icons/abstract.png';
import sharphens from './icons/sharphens.png';

const SingleColumnLayout = () => {
  return (
    <div className="table-layout">
      <table className="sell">
      <tbody>
        <tr>
        <td>
        <h3 className='bold'>Product Sell</h3>
        </td>
        <td>

        </td>
        <td>

        </td>
        <td><p className='searchline'><SearchComponent/></p></td>
        </tr>
          <tr>
            <td>
              <p>Product Name</p>
              {/* Content for Column 1 */}
              
              <p><img src={abstract} alt="Dollar Logo" style={{ width: '45px', height: '20px', marginRight:'10px'}}/><b>Abstract 3D</b><br/>Lorem ipsum dolor sit amet consectetur edipiscing elit</p>
              <p><img src={sharphens} alt="Dollar Logo" style={{ width: '40px', height: '20px', marginRight:'10px'}}/><b>Sharphens Illustration</b><br/>Lorem ipsum dolor sit amet consectetur edipiscing elit</p>
            </td>
            <td>
            <p className='sale'>Stock</p>
              {/* Content for Column 2 */}
              <p className='sale'>32 in stocks</p>
              <p className='sale'>32 in stocks</p>
              
            </td>
            <td>
            <p className='sale'>Price</p>
              {/* Content for Column 3 */}
              <p className='sale'>$45.9</p>
              <p className='sale'>$45.9</p>
            </td>
            <td>
            <p className='sale'>Total Sales</p>

              {/* Content for Column 4 */}
              <p className='sale'>20</p>
              <p className='sale'>20</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleColumnLayout;
