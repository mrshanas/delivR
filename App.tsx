import { StatusBar } from "expo-status-bar";

import { MainNavigation } from "./src/navigation";

export default function App() {
  return (
    <>
      <MainNavigation />
      <StatusBar style="auto" />
    </>
  );
}
