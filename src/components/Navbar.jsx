import React from "react";

class Navbar extends React.Component {
  state = {
    drawerPos: 1,
  };

  handleDrawer = () => {
    if (this.state.drawerPos < 2) {
      this.setState((state) => ({
        drawerPos: state.drawerPos + 1,
      }));
    } else {
      this.setState({
        drawerPos: 0,
      });
    }
  };
  render() {
    let drawerClass = [];
    let mainClass = [];
    if (this.state.drawerPos === 1) {
      drawerClass.push("drawerMin");
      mainClass.push("mainMin");
    } else if (this.state.drawerPos === 2) {
      drawerClass.push("drawerOpen");
      mainClass.push("mainOpen");
    } else {
      drawerClass = [];
      mainClass = [];
    }

    return (
      <div className="App">
        <navbar className="navbar">
          {" "}
          <i className="material-icons menu" onClick={this.handleDrawer}>
            menu
          </i>{" "}
          <h3 className="title"> Heli Hire</h3>{" "}
        </navbar>
        <aside className={drawerClass.join(" ")}>
          <ul>
            <li>
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </li>
            <li>
              <i className="material-icons">people</i>
              <span>Clients</span>
            </li>
            <li>
              <i className="material-icons">show_chart</i>
              <span>Sales</span>
            </li>
            <li>
              <i className="material-icons">table_chart</i>
              <span>Others</span>
            </li>
          </ul>
        </aside>
        <main className={mainClass.join(" ")}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            dolore veritatis iure necessitatibus natus nisi et suscipit unde
            quasi placeat, facere omnis rerum quam exercitationem aperiam minima
            dolores maiores id incidunt minus aliquam sapiente, sed, aut
            voluptas? Corporis delectus quo tempore similique commodi ex porro
            totam praesentium inventore, ea quas. Earum culpa repellat iste enim
            quam impedit officia asperiores eveniet explicabo vitae illum animi
            accusamus reiciendis consectetur debitis in laudantium praesentium
            unde ab nisi, labore omnis adipisci. Et laboriosam soluta
            necessitatibus iure perferendis expedita quaerat est nemo sint, ipsa
            dignissimos odit reiciendis quibusdam consequuntur facilis ex
            delectus minima! Magnam, voluptatibus impedit excepturi debitis
            numquam labore quam, vitae vel dicta vero unde enim quia, expedita
            incidunt minus exercitationem eos minima architecto? Dicta unde
            tenetur explicabo rerum vitae ullam alias eligendi soluta!
            Laudantium, quaerat ipsa impedit harum a voluptate dolorum delectus
            vero officia saepe voluptatum? Quidem iure inventore officia ea
            adipisci voluptate quasi libero sapiente officiis! Sit quisquam,
            voluptates enim tempora accusamus quaerat incidunt minus nobis. Quam
            explicabo error sit deleniti illo temporibus quidem officia mollitia
            perferendis corporis. Exercitationem odit adipisci sunt quidem.
            Nulla delectus nemo excepturi maiores ab ad non quisquam omnis
            ducimus veritatis quis minus aspernatur incidunt accusamus, impedit
            distinctio temporibus voluptas, quos pariatur, id cumque possimus.
            Placeat, harum, doloribus hic fugit quam ipsa sapiente dolores
            temporibus enim excepturi est ut necessitatibus, cum sit voluptates
            in? Eligendi commodi eaque suscipit ullam hic harum mollitia
            doloremque doloribus aperiam? Provident obcaecati aliquid doloribus
            voluptatibus voluptates nemo suscipit quis voluptatem repellat?
            Suscipit, dolorum eos temporibus harum ea nam sit adipisci
            laudantium quos natus possimus vel dicta sunt, tenetur quisquam
            quidem beatae sint enim inventore similique. Ad omnis cupiditate
            praesentium minus, reprehenderit a officiis voluptas amet cum esse,
            dignissimos qui? Quidem eos doloribus aut architecto excepturi
            officiis nostrum autem, voluptatum possimus dolores, vitae
            molestias, fuga incidunt ex. Rerum, est possimus! Dolorum quod
            voluptatem, ullam dolor animi aspernatur nihil ipsa saepe asperiores
            ducimus! Eaque aut dolore, dolorum officia qui sit facere id iste,
            aspernatur eum sed, voluptatibus fugiat. Aspernatur, voluptatem
            repudiandae? Eveniet, veniam sequi? Nesciunt excepturi et,
            temporibus optio possimus sapiente vitae vero corporis, quia natus
            numquam. Corporis, maiores sed? Corporis et similique harum
            recusandae quis atque ullam eum! Facilis expedita culpa, in autem
            ducimus quidem id animi veritatis nihil mollitia quae praesentium
            labore ad laudantium dolorem. Veritatis, cupiditate, possimus
            ducimus ullam neque commodi eos quidem fugit sint quam voluptate
            iure dolor rem expedita nam? Autem, eos maxime. Perspiciatis quaerat
            ullam veritatis, necessitatibus est quis voluptatem mollitia
            temporibus quo, consequatur modi, sit fuga. Voluptate quia quam
            voluptates alias culpa officiis, aperiam eos quo, pariatur, quae
            ipsum cum ab veniam beatae numquam adipisci repellendus a
            consequatur recusandae veritatis cumque? Officia qui illo
            necessitatibus harum asperiores sed iste suscipit nostrum cum omnis
            maxime aut, aliquam odit, facere totam voluptas quia veniam numquam?
            Saepe in nemo, ullam animi soluta nisi necessitatibus recusandae
            perferendis excepturi et, sed libero dicta corrupti, quis impedit
            tenetur! Assumenda numquam veniam velit quasi modi, amet ab atque
            quam voluptatibus quisquam odio sit doloremque hic.
          </p>
        </main>
      </div>
    );
  }
}

export default Navbar;
