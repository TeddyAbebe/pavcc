import React from "react";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "./Dashboard";
import { AllIdeas } from "./Ideas";
import { IdeaDetail } from "./IdeaDetail";
import { IdeaSummary } from "./Summary";
import { StartedProcess } from "./StartedProcess";
import { StartedProcessDetail } from "./StartedProcessDetail";
import { AdminNotification } from "./AdminNotification";
import NotificationDetail from "./NotificationDetail";
import { User } from "./User";
import { Carrier } from "./Carrier";

export const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="user" element={<User />} />
        <Route path="carrier" element={<Carrier />} />
        <Route path="all-ideas" element={<AllIdeas />} />
        <Route path="all-ideas/:id" element={<IdeaDetail />} />
        <Route path="ideas-approved" element={<IdeaSummary />} />
        <Route path="start-process" element={<StartedProcess />} />
        <Route path="start-process/:id" element={<StartedProcessDetail />} />
        <Route path="notifications" element={<AdminNotification />} />
        <Route path="notifications/:id" element={<NotificationDetail />} />

      </Routes>
    </Layout>
  );
};
