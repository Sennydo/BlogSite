export const revalidate = 3600;
const Content = async ({params}) => {
    const {id} = await params;
    console.log(id)
    return(
        <h1>Hi</h1>
    );
}

export default Content;