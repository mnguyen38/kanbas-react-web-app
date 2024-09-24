import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course"> {/* Course 1 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 2 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3000/Home">
            <img src="/images/cs3000red.jpg" width={200} />
            <div>
              <h5>
                CS3000 Algorithm & Data 
              </h5>
              <p className="wd-dashboard-course-title">
                CS3000 Algorithm & Data MERGED.202510
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 3 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/3200/Home">
            <img src="/images/cs3200white.jpg" width={200} />
            <div>
              <h5>
                CS3200 Introduction to Database
              </h5>
              <p className="wd-dashboard-course-title">
                Master of Databases
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 4 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4550/Home">
            <img src="/images/cs4550green.jpg" width={200} />
            <div>
              <h5>
                CS4550 Web Development
              </h5>
              <p className="wd-dashboard-course-title">
                Best class no doubt
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 5 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/ECON2316/Home">
            <img src="/images/macroecononmcis.jpg" width={200} />
            <div>
              <h5>
                ECON2316 Microeconomics
              </h5>
              <p className="wd-dashboard-course-title">
                Not sure if its macro or micro
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 6 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/CS4000/Home">
            <img src="/images/cs4000.jpg" width={200} />
            <div>
              <h5>
                CS4000 Something coding
              </h5>
              <p className="wd-dashboard-course-title">
                We learn to code
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> {/* Course 7 */}
          <Link className="wd-dashboard-course-link"
            to="/Kanbas/Courses/4900/Home">
            <img src="/images/4900.jpg" width={200} />
            <div>
              <h5>
                CS4900 Blogging Coding
              </h5>
              <p className="wd-dashboard-course-title">
                Blog on the process of coding
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
