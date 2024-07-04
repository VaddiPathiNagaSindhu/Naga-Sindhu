import './App.css';
import Form from './Layout';
function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Registration/>}/>
        <Route path="login" element={<Login/>}/>
        <Route patrh="*" element={<Signup/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}
export default App;
