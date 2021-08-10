import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
const { Content } = Layout;
import { StreamApp, StatusUpdateForm, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import "./Feed.css";

function Feed(props) {
  return (
    <>
    <div className="feed-container">
          <StreamApp
            apiKey="jdktd3symg3w"
            appId="1137410"
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNCJ9._E0CRdLb9tj_WMiiedrBdTUPDDNxVJdK1QhByI3x5bE"
            >
            <StatusUpdateForm />
            <FlatFeed feedGroup="user" notify />
          </StreamApp>

            </div>
    </>
  );
}

export default Feed;
