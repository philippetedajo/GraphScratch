const Container = ({ children, padding }) => {
  return (
    <div
      className={padding}
      style={{
        // full height - header - footer
        minHeight: "calc(100vh - 64px - 50px )",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
