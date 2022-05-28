import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./components/Board";
import Cards from "./components/Cards";
import { Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <h3>Work To Be Done</h3>
          <Cards id="card-1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-1-1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-2" className="board">
          <h3>Work in Progress</h3>
          <Cards id="card-2" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-2-1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 4</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
        <Board id="board-3" className="board">
          <h3>Work to be Reviewed</h3>
          <Cards id="card-3" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 5</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
          <Cards id="card-3-1" className="card" draggable="true">
            <Card>
              <Card.Body>
                <Card.Title>Article 6</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nostrum, minus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Cards>
        </Board>
      </main>
    </div>
  );
}

export default App;
