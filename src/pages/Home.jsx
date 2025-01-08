import React, { useState } from "react";
import { posts } from "../../lib/post";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* post  */}
      <div className="flex gap-3 w-full pt-8 pl-8">
        <div className="max-w-12 max-h-12 rounded-full border-4 border-white flex justify-center items-center">
          <img
            className="max-w-12 max-h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
            alt=""
          />
        </div>
        <div className="max-w-12 max-h-12 rounded-full border-4 border-white flex justify-center items-center">
          <img
            className="max-w-12 max-h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
            alt=""
          />
        </div>
        <div className="max-w-12 max-h-12 rounded-full border-4 border-white flex justify-center items-center">
          <img
            className="max-w-12 max-h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
            alt=""
          />
        </div>
      </div>{" "}
      <div className="flex justify-around w-full">
        <div>
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col gap-5">
              <div className="user-info flex gap-5 items-center pt-8">
                <img
                  src={post.user.profile_picture}
                  alt={post.user.username}
                  className="w-8 h-8 rounded-full"
                />
                <p>{post.user.username}</p>
              </div>
              <img
                className="w-[468px] h-[584px] rounded-sm"
                src={post.content.image}
                alt="Post content"
              />
              <div className="flex gap-3 items-center">
                <svg
                  aria-label="Notifications"
                  class="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Notifications</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>

                {/* coment  */}
                <svg
                  aria-label="Comment"
                  class="x1lliihq x1n2onr6 x5n08af"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Comment</title>
                  <path
                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
                {/* share  */}
                <svg
                  aria-label="Share"
                  class="x1lliihq x1n2onr6 xyb1xck"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Share</title>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </div>
              <p>{post.caption}</p>
              <p>{post.likes} likes</p>
              <p>{post.comments.length} comments</p>
              {/* یہاں تبصرے اور باقی معلومات بھی ڈسپلے کرسکتے ہیں */}
              <div className="max-w-full border-b-[1px] border-[#262626]"></div>
            </div>
          ))}
        </div>

        <div className="border-b-[1px] border-[#262626]">
          <div className="flex flex-col gap-5">
            <div className="rounded-full  flex justify-center items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/028/794/707/non_2x/cartoon-cute-school-boy-photo.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p>talha</p>
                <p>Followed by owais</p>
              </div>
            </div>
            <div className="rounded-full  flex justify-center items-center gap-3">
              <div className="flex flex-col">
                <p className="text-gray-400 font-bold">Suggested for you</p>
              </div>
            </div>
            <div className="rounded-full  flex justify-center items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
                alt=""
              />
              <div className="flex flex-col">
                <p>talha</p>
                <p>Followed by owais</p>
              </div>
            </div>
            <div className="rounded-full  flex justify-center items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full gap-2"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
                alt=""
              />
              <div className="flex flex-col">
                <p>talha</p>
                <p>Followed by owais</p>
              </div>
            </div>
            <div className="rounded-full  flex justify-center items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
                alt=""
              />
              <div className="flex flex-col">
                <p>talha</p>
                <p>Followed by owais</p>
              </div>
            </div>
            <div className="rounded-full  flex justify-center items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpAG834kHcVtdR3VWHXJfHVwJ7SaXBIDMtYA&s"
                alt=""
              />
              <div className="flex flex-col">
                <p>talha</p>
                <p>Followed by owais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
