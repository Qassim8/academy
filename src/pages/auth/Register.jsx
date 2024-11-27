
const Register = () => {
  return (
      <form className="container mt-5 mx-auto">
        <label htmlFor="name">الاسم</label>
          <input type="text" name="" id=""  className="form-control w-25 outline-none" />
          <label htmlFor="id">الرقم الجامعي</label>
          <input type="number" name="" id=""  className="form-control w-25 outline-none" />
          <label htmlFor="email">البريد الالكتروني</label>
          <input type="email" name="" id=""  className="form-control w-25 outline-none" />
          <label htmlFor="batch">الفرقة</label>
          <select name="" id="" className="form-control w-25 outline-none" >
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
          </select>
          <label htmlFor="password">كلمة السر</label>
          <input type="password" name="" id="" className="form-control w-25 outline-none" />
          <button type="submit" className="btn btn-success">تسجيل</button>
    </form>
  )
}

export default Register