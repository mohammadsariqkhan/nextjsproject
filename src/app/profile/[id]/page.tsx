export default function UserProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <h1>profile</h1>
            <hr />
            <p className="text-4xl">{params.id}</p> 
        </div>
    )
}