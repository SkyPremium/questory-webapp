import AvatarScreen from "./pages/AvatarScreen";

const renderScene = (path: string) => {
  switch (path) {
    case "/":
      return <LoadingScreen />;
    case "/welcome":
      return <WelcomeScreen />;
    case "/rules":
      return <RulesScreen />;
    case "/name":
      return <NameScreen />;
    case "/avatar":
      return <AvatarScreen />;
    default:
      return <Navigate to="/" replace />;
  }
};
