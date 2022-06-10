const RedirectPage = () => {
    useEffect(() => {
      window.location.replace('https://www.kindacode.com');
    }, [])
  
    // Render some text when redirecting
    // You can use a loading gif or something like that
    return <div style={styles.container}>
      <h3>Redirecting...</h3>
    </div>
  }