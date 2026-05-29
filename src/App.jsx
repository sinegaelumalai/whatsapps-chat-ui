import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import ProfilePage from "./components/profilePage";
import ChatPage from "./components/chatPage";
import ChatDetailsPage from "./components/chatDetailsPage";
import CallPage from "./components/callPage";
import StatusPage from "./components/statusPage";
import SettingsPage from "./components/settingsPage";
import ContactsPage from "./components/contactsPage";



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