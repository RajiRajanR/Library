import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainNavbar from './Navbar/MainNavbar';
import Footer from './Footer/Footer';
import LandingPage from './Home/LandingPage';
import AdminLogin from './Admin/AdminLogin';
import StudentLogin from './Student/StudentLogin';
import StaffLogin from './Staff/StaffLogin';
import StudentRegister from './Student/StudentRegister';
import StaffRegister from './Staff/StaffRegister';
import StudentEditProfile from './Student/StudentEditProfile';
import StudentViewProfile from './Student/StudentViewProfile';
import StaffViewProfile from './Staff/StaffViewProfile';
import StaffEditProfile from './Staff/StaffEditProfile';
import AdminSidebar from './Admin/AdminSidebar';
import AdminDashboard from './Admin/AdminDashboard';
import StudentDashboard from './Student/StudentDashboard';
import StaffDashboard from './Staff/StaffDashboard';
import AdminViewStaffList from './Admin/AdminViewStaffList';
import AdminViewStudentList from './Admin/AdminViewStudentList';
import StudentBookBorrow from './Student/StudentBookBorrow';
import StaffBookBorrow from './Staff/StaffBookBorrow';
import StudentReturnBook from './Student/StudentReturnBook';
import StaffReturnBook from './Staff/StaffReturnBook';
import StudentRequest from './Admin/StudentRequest';
import StaffRequest from './Admin/StaffRequest';
import MainNavbar1 from './Navbar/MainNavbar1';
import StudentBookList from './Student/StudentBookList';
import AdminviewBookList from './Admin/AdminviewBookList';
import AdminAddBook from './Admin/AdminAddBook';
import AdminUpdateBook from './Admin/AdminUpdateBook';
import SatffBookList from './Staff/SatffBookList';
import StudentNotification from './Student/StudentNotification';
import StudentFinePayment from './Student/StudentFinePayment';
import StaffNotification from './Staff/StaffNotification';
import StudentBorrowRequest from './Staff/StudentBorrowRequest';
import StaffBorrowRequest from './Admin/StaffBorrowRequest';
import StudentMyBook from './Student/StudentMyBook';
import StaffMyBooks from './Staff/StaffMyBooks';
import AdminViewStaffBook from './Admin/AdminViewStaffBook';
import AdminAddStaffFine from './Admin/AdminAddStaffFine';
import StaffAddStudentFine from './Staff/StaffAddStudentFine';
import StaffViewStudentBook from './Staff/StaffViewStudentBook';
import StaffFinePayment from './Staff/StaffFinePayment';
function App() {

  const url = "http://localhost:4098/";
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={[<MainNavbar />, <LandingPage />, <Footer />]} />

        {/* Admin */}

        <Route path='/adminlogin' element={[<MainNavbar />, <AdminLogin />, <Footer />]} />
        <Route path='/admindashboard' element={[<MainNavbar1 />, <AdminDashboard />, <Footer />]} />
        <Route path='/adminviewstafflist' element={[<MainNavbar1 />, <AdminViewStaffList url={url}/>, <Footer />]} />
        <Route path='/adminviewstudentlist' element={[<MainNavbar1 />, <AdminViewStudentList url={url}/>, <Footer />]} />
        <Route path='/adminviewbooklist' element={[<MainNavbar1 />, <AdminviewBookList url={url}/>, <Footer />]} />
        <Route path='/adminaddbook' element={[<MainNavbar1 />, <AdminAddBook url={url}/>, <Footer />]} />
        <Route path='/adminupdatebook/:id' element={[<MainNavbar1 />, <AdminUpdateBook url={url}/>, <Footer />]} />
        <Route path='/staffborrowrequest' element={[<MainNavbar1 />, <StaffBorrowRequest url={url}/>, <Footer />]} />
        <Route path='/adminviewstaffbook/:staffId' element={[<MainNavbar1 />, <AdminViewStaffBook/>, <Footer />]} />
        <Route path='/adminaddstafffine/:id' element={[<MainNavbar1 />, <AdminAddStaffFine/>, <Footer />]} />


        {/* Student */}

        <Route path='/studentlogin' element={[<MainNavbar />, <StudentLogin />, <Footer />]} />
        <Route path='/studentregister' element={[<MainNavbar />, <StudentRegister />, <Footer />]} />
        <Route path='/studenteditprofile' element={[<MainNavbar1 />, <StudentEditProfile url={url}/>, <Footer />]} />
        <Route path='/studentviewprofile' element={[<MainNavbar1 />, <StudentViewProfile url={url}/>, <Footer />]} />
        <Route path='/studentdashboard' element={[<MainNavbar1 />, <StudentDashboard />, <Footer />]} />
        <Route path='/studentbookborrow/:id' element={[<MainNavbar1 />, <StudentBookBorrow />, <Footer />]} />
        <Route path='/studentbookreturn/:id' element={[<MainNavbar1 />, <StudentReturnBook />, <Footer />]} />
        <Route path='/studentbooklist' element={[<MainNavbar1 />, <StudentBookList url={url}/>, <Footer />]} />
        <Route path='/studentnotification' element={[<MainNavbar1 />, <StudentNotification/>, <Footer />]} />
        <Route path='/studentfinepayment/:id' element={[<MainNavbar1 />, <StudentFinePayment/>, <Footer />]} />
        <Route path='/studentmybook' element={[<MainNavbar1 />, <StudentMyBook url={url}/>, <Footer />]} />

        {/* Staff */}

        <Route path='/stafflogin' element={[<MainNavbar />, <StaffLogin />, <Footer />]} />
        <Route path='/staffregister' element={[<MainNavbar />, <StaffRegister />, <Footer />]} />
        <Route path='/staffeditprofile' element={[<MainNavbar1 />, <StaffEditProfile url={url}/>, <Footer />]} />
        <Route path='/staffviewprofile' element={[<MainNavbar1 />, <StaffViewProfile url={url}/>, <Footer />]} />
        <Route path='/staffdashboard' element={[<MainNavbar1 />, <StaffDashboard />, <Footer />]} />
        <Route path='/staffbookborrow/:id' element={[<MainNavbar1 />, <StaffBookBorrow />, <Footer />]} />
        <Route path='/staffbookreturn/:id' element={[<MainNavbar1 />, <StaffReturnBook />, <Footer />]} />
        <Route path='/staffbooklist' element={[<MainNavbar1 />, <SatffBookList url={url}/>, <Footer />]} />
        <Route path='/staffnotification' element={[<MainNavbar1 />, <StaffNotification/>, <Footer />]} />
        <Route path='/studentborrowrequest' element={[<MainNavbar1 />, <StudentBorrowRequest url={url}/>, <Footer />]} />
        <Route path='/staffmybook' element={[<MainNavbar1 />, <StaffMyBooks url={url}/>, <Footer />]} />
        <Route path='/staffviewstudentbook/:studentId' element={[<MainNavbar1 />, <StaffViewStudentBook/>, <Footer />]} />
        <Route path='/staffaddstudentfine/:id' element={[<MainNavbar1 />, <StaffAddStudentFine/>, <Footer />]} />
        <Route path='/stafffinepayment/:id' element={[<MainNavbar1 />, <StaffFinePayment/>, <Footer />]} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
