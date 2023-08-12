import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import { FaRegCommentAlt } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { BiBorderBottom } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai"
import {BiSolidLaugh} from "react-icons/bi"
function Contentnews(props) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <div
      style={{
        width: "100%",
        padding: "0px",
        boxSizing: "border-box",
        marginTop: "20px",
      }}
    >
      <Row style={{ padding: "0px", margin: "0px",}}>
        <Col className="mb-2 p-0 w-100">
          <Toast
            show={showA}
            onClose={toggleShowA}
            style={{ width: "100%", padding: "10px", borderRadius:"10px" }}
          >
            <Toast.Header className="d-flex justify-content-between align-items-center border-0">
              <div className="d-flex gap-3">
                <img
                  src={props.profilePicture}
                  alt="RONB"
                  height="40px"
                  width="40px"
                  style={{ borderRadius: "50%" }}
                />
                <div>
                  <strong
                    style={{ fontSize: "15px", textTransform: "capitalize" }}
                  >
                    {props.name}
                  </strong>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    {props.time}m &nbsp;
                    <BsGlobeAmericas></BsGlobeAmericas>
                  </p>
                </div>
              </div>

            </Toast.Header>
            
            <Toast.Body className="w-100 py-0">
            <div className="border-bottom">
              <p class="newsFeedContent">{props.content}</p>
              </div> 
            <div className="d-flex justify-content-center border-bottom mb-3">
              
              <img
                src={props.contentImage}
                alt="Img Routine"
                style={{ height: "450px", width: "70%", textAlign:"center" }}
              />
            </div>

            </Toast.Body>
            <div className="d-flex justify-content-between px-3">
              <div className="d-flex gap-2 align-items-center">
               <div className="d-flex">
                
                <AiOutlineLike
                  style={{
                    background: "blue",
                    color: "white",
                    borderRadius: "50%",
                    padding: "3px",
                    height: "20px",
                    width: "20px",
                  }}
                ></AiOutlineLike><AiFillHeart style={{ height: "20px",
                width: "20px",color:"red"}}></AiFillHeart><BiSolidLaugh style={{height: "20px",
                width: "20px",color:"yellow"}} ></BiSolidLaugh>
               </div>

                <span> {props.like} k</span>
              </div>
              <div className="d-flex gap-2">
                <div>{props.comment} comments</div>
                <div>{props.share} shares</div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around mb-4">
              <button
                type=""
                id="like"
                className="d-flex gap-2 align-items-center"
              >
                <AiOutlineLike class="likeIcon"></AiOutlineLike>
                <span>Like</span>
              </button>
              <button
                type=""
                id="comment"
                className="d-flex gap-2 align-items-center"
              >
                <FaRegCommentAlt class="commentIcon"></FaRegCommentAlt>
                <span>Comment</span>
              </button>
              <button
                type=""
                id="share"
                className="d-flex gap-2 align-items-center"
              >
                <PiShareFatThin class="shareIcon"></PiShareFatThin>
                <span>Share</span>
              </button>
            </div>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
export default Contentnews;
