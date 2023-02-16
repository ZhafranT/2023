import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../components';

const Single = () => {
   return (
      <div className="single">
         <div className="content">
            <img src="  " alt="" />
            <div className="user">
               <img src="" alt="" />
               <div className="info">
                  <span>John</span>
                  <p>posted 2 days age</p>
               </div>
               <div className="edit">
                  <Link to={`/write?edit=2`}>
                     <img src="" alt="" />
                  </Link>
                  <img src="" alt="" />
               </div>
            </div>
            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit vero voluptates nemo provident, porro eum
               fugiat exercitationem temporibus! Exercitationem aliquid earum odit, saepe non veniam hic nam dolor
               laboriosam illum debitis tenetur, id eos ipsum aut reiciendis illo numquam quibusdam. Reprehenderit ipsum
               possimus soluta porro illum aliquam facilis atque esse, quam doloremque natus eius aperiam nisi dolor
               consequuntur cum eos nemo velit et blanditiis dignissimos quas repellat. Error voluptatum earum beatae
               deserunt, sint nulla distinctio quibusdam fugit nisi, sapiente veritatis nemo magnam, quod dolorum illo
               ab natus corrupti est animi neque explicabo perferendis saepe inventore a! Necessitatibus saepe dolor
               nemo.
            </p>
         </div>
         <Menu />
      </div>
   );
};

export default Single;
