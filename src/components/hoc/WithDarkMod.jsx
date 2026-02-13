const WithDarkMod = (Component) => {
  return function DarkModeWrapper(props) {
    const { isDark } = props;

    const styles = {
      backgroundColor: isDark ? "#212529" : "#ffffff",
      color: isDark ? "#ffffff" : "#000000",
      height: "100vh",
      transition: "0.3s",
    };

    return (
      <div style={styles}>
        <Component {...props} />
      </div>
    );
  };
};

export default WithDarkMod;
