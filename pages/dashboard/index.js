import { useSession, signIn, signOut } from "next-auth/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch("https://4df5-49-229-108-181.ngrok-free.app/api/users");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter()

const handleDelete = async (id) => {
  // console.log("ID : ", id);
  fetch('https://4df5-49-229-108-181.ngrok-free.app/api/users?id=' + id, {
  method: 'DELETE',
  })
  return router.reload('/dashboard')
}


  // if (session) {
    return (
      <>
                <header>
          <nav className="navbar fixed-top navbar-expand-lg bg-warning">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                Signed In as {session.user.fname} {session.user.lname}
                <span>&nbsp;</span>
                <form className="d-flex" role="search">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={() => signOut()}
                  >
                    ออกจากระบบ
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
        </header>
        <br />
        <br />
        <br />
        <br />
        <div className="container my-4">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link type="button" className="btn btn-outline-danger" href="/dashboard/fromUser">Add User</Link>
          </div>

          <div className="table-responsive mt-4">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">Studentid</th>
                  <th className="text-center">Firstname</th>
                  <th className="text-center">Lastname</th>
                  <th className="text-center">Username</th>
                  <th className="text-center">Password</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts.user.map((post, i) => (
                  <tr>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{post.studentid}</td>
                    <td className="text-center">{post.firstname}</td>
                    <td className="text-center">{post.lastname}</td>
                    <td className="text-center">{post.username}</td>
                    <td className="text-center">{post.password}</td>
                    <td className="text-center">{post.status}</td>
                    <td className="text-center">
                      <button type="button" className="btn btn-success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.502 1.94a.5.5 0 0 1 0 .706L13.459 3.69l-2-2L12.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L5.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                      </button>
                      &nbsp;&nbsp;
                      <button type="button" className="btn btn-danger" onClick={() => handleDelete(post.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  // return (
  //   <>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col">
  //           Not signed in <br />
  //           <button onClick={() => signIn()}>Sign in</button>
  //         </div>
  //       </div>
  //     </div> 
  //   </>
  // );
// }
