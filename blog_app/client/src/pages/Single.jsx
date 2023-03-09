import axios from "axios";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "../components";
import { AuthContext } from "../context/authContext";

const Single = () => {
   const [post, setPost] = useState([]);

   const location = useLocation();
   const navigate = useNavigate();

   const postId = location.pathname.split("/")[2];
   const { currentUser } = useContext(AuthContext);

   useEffect(() => {
      const fetchData = async (req, res) => {
         try {
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchData();
   }, [postId]);

   const handleDelete = async () => {
      try {
         await axios.delete(`/posts/${postId}`);
         navigate("/");
      } catch (error) {
         console.log(error);
      }
   };

   const getText = (html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent;
   };

   return (
      <div className="single">
         <div className="content">
            <img src={`../upload/${post?.img}`} alt="" />
            <div className="user">
               {post.userImg && <img src={post.userImg} alt="" />}
               <div className="info">
                  <span>{post.username}</span>
                  <p>posted {moment(post.date).fromNow()}</p>
               </div>
               {currentUser
                  ? currentUser.username === post.username && (
                       <div className="edit">
                          <Link to={`/write?edit=2`} state={post}>
                             <img
                                src="https://cdn-icons-png.flaticon.com/512/8989/8989084.png"
                                alt=""
                             />
                          </Link>
                          <img
                             onClick={handleDelete}
                             src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
                             alt=""
                          />
                       </div>
                    )
                  : null}
            </div>
            <h1>{post.title}</h1>
            {getText(post.desc)}
         </div>
         <Menu cat={post.cat} />
      </div>
   );
};

export default Single;
