
const WithAuth=(Component)=>{
    return function WrappedComponent(props) {
    const { isAuthenticated } = props;
    if (isAuthenticated){
        return (
        <Component {...props}/>
    )
        }
        else{
            return <p>Please login to Access</p>
        }
}
}

export default WithAuth;