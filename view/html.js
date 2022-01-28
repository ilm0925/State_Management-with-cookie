export default class view {
  login() {
    return `
      <form action="/login" method="POST" style="text-align: center">
      <div>ID<input type="text" name="id" /></div>
      <br />
      <div>PASSWORD<input type="text" name="pwd" /></div>
      <br/>
      <input type="submit"/>
    </form>
      `;
  }
  main(name, state) {
    if (state == 1) {
      return `
      <form action="/logout" method="POST">
      <h1 style="text-align: center">안녕하세요 ${name}님
      <br/>
      <br/>
      <button type="submit">로그아웃</button>
      </h1>
      </form>
      `;
    }
    return `<h1 style="text-align: center"><a href="/login">로그인</a>을하세요</h1>`;
  }
}
