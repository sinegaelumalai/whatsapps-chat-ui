import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProfilePage from "./components/ProfilePage";
import ChatPage from "./components/ChatPage";
import ChatDetailsPage from "./components/ChatDetailsPage";
import CallPage from "./components/CallPage";
import StatusPage from "./components/StatusPage";
import SettingsPage from "./components/SettingsPage";
import ContactsPage from "./components/ContactsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<ProfilePage />} />

          {/* CHAT PAGE + DETAILS */}
          <Route path="chats" element={<ChatPage />}>
            <Route path=":id" element={<ChatDetailsPage />} />
          </Route>

          {/* CALL PAGE */}
          <Route path="calls" element={<CallPage />} />

          {/* STATUS PAGE */}
          <Route path="status" element={<StatusPage />} />

          {/* SETTINGS PAGE */}
          <Route path="settings" element={<SettingsPage />} />

          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;