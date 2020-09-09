import React, { useState, useEffect } from "react";
import * as Styled from "./styles";

const HOST = "host";
const NA = "na";
const data = [
  [
    "Name",
    "Quiz1",
    "Quiz2",
    "Quiz3",
    "Quiz4",
    "Quiz5",
    "Quiz6",
    "Quiz7",
    "Quiz8",
    "Quiz9",
    "Quiz10",
    "Quiz12",
    "Quiz13",
    "Quiz14",
    "Quiz15",
    "Quiz16",
    "Quiz17",
    "Quiz18",
    "Quiz19",
    "Quiz20",
    "Quiz21",
    "Quiz22",
  ],
  [
    "Ben A",
    NA,
    10,
    14.5,
    13,
    NA,
    12,
    HOST,
    NA,
    NA,
    16,
    19,
    NA,
    NA,
    6,
    NA,
    23,
    30,
    NA,
    22,
    NA,
    NA,
  ],
  [
    "Ben M",
    NA,
    12,
    HOST,
    21,
    13,
    20,
    22.5,
    NA,
    21.5,
    15,
    NA,
    NA,
    NA,
    13,
    NA,
    25,
    NA,
    19,
    27,
    HOST,
    15.5,
  ],
  [
    "Bianca",
    11,
    10,
    12,
    14,
    14,
    17,
    17,
    NA,
    24,
    13,
    HOST,
    NA,
    7,
    13,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Chris",
    13,
    7,
    9,
    HOST,
    17,
    NA,
    17.5,
    NA,
    17,
    12,
    23,
    NA,
    16,
    5,
    12,
    23.5,
    30.5,
    HOST,
    17,
    19,
    22,
  ],
  [
    "John",
    NA,
    9,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Leigh",
    NA,
    10,
    9,
    NA,
    NA,
    14,
    17,
    99,
    HOST,
    16,
    NA,
    NA,
    6,
    11,
    NA,
    NA,
    22.5,
    NA,
    22,
    NA,
    17,
  ],
  [
    "Lewis",
    10,
    HOST,
    11,
    14,
    15,
    9,
    18.5,
    NA,
    14,
    11,
    26,
    NA,
    8,
    7,
    4,
    16,
    18,
    13,
    NA,
    19,
    15.5,
  ],
  [
    "Lilly",
    NA,
    12,
    16.5,
    19,
    NA,
    NA,
    NA,
    NA,
    NA,
    HOST,
    NA,
    NA,
    14,
    NA,
    16,
    NA,
    NA,
    20,
    NA,
    20,
    HOST,
  ],
  [
    "Manu",
    11,
    8,
    NA,
    16,
    12,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Ollie",
    15,
    NA,
    NA,
    11,
    NA,
    10,
    NA,
    NA,
    NA,
    13,
    NA,
    NA,
    HOST,
    NA,
    5,
    25.5,
    NA,
    11,
    NA,
    NA,
    NA,
  ],
  [
    "Rachel",
    NA,
    13,
    13,
    16,
    15,
    HOST,
    13,
    NA,
    17.5,
    15,
    21.5,
    NA,
    11,
    18,
    HOST,
    26.5,
    19.5,
    NA,
    22,
    17,
    9.5,
  ],
  [
    "Razvan",
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    16,
    NA,
    NA,
    NA,
    8,
    NA,
    NA,
    HOST,
    3,
    18,
    16.5,
    10,
    15.5,
    NA,
    NA,
  ],
  [
    "Richard",
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    14,
    11,
    NA,
    NA,
    9,
    10,
    8,
    HOST,
    23.5,
    NA,
    NA,
    16,
    NA,
  ],
  [
    "Rosie",
    HOST,
    11,
    10,
    17,
    15.5,
    15,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Sean",
    8,
    NA,
    NA,
    12,
    12,
    15,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
    9,
    NA,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Steve",
    8,
    6,
    11,
    11,
    5,
    7,
    17,
    HOST,
    NA,
    NA,
    12,
    NA,
    NA,
    NA,
    NA,
    16.5,
    NA,
    NA,
    NA,
    NA,
    NA,
  ],
  [
    "Thomas",
    8.5,
    7,
    9,
    NA,
    NA,
    13,
    NA,
    NA,
    12.5,
    NA,
    NA,
    HOST,
    12,
    11,
    NA,
    17,
    NA,
    11,
    NA,
    NA,
    16,
  ],
  [
    "Vicent",
    11,
    12,
    17.5,
    20,
    HOST,
    15,
    23,
    NA,
    18.5,
    19,
    36,
    99,
    16,
    NA,
    12,
    28.5,
    HOST,
    15,
    HOST,
    19,
    26,
  ],
];

const next = "Lilly";
export const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [winnerList, setWinners] = useState([]);
  const [loserList, setLosers] = useState([]);
  const getWinners = () => {
    const winners = data[0].map((quiz, index) => {
      if (index === 0) return null;
      let winner;
      let score = 0;
      for (const person of data.slice(1)) {
        if (typeof person[index] === "number" && person[index] > score) {
          winner = person[0];
          score = person[index];
        }
      }
      return winner;
    });
    return winners;
  };
  const getLosers = () => {
    const losers = data[0].map((quiz, index) => {
      if (index === 0) return null;
      let loser;
      let score = 100;
      for (const person of data.slice(1)) {
        if (typeof person[index] === "number" && person[index] < score) {
          loser = person[0];
          score = person[index];
        }
      }
      return loser;
    });
    return losers;
  };

  useEffect(() => {
    let dataArray = [];
    dataArray = data.map((d) => {
      const currentObject = {};
      data[0].forEach((key, index) => (currentObject[key] = d[index]));
      return currentObject;
    });
    setTableData(dataArray);
    setWinners(getWinners());
    setLosers(getLosers());
  }, []);
  const getChampion = (winners) => {
    let champion;
    let won = 0;
    winners.forEach((winner) => {
      if (winner && winners.filter((name) => winner === name).length > won) {
        champion = winner;
        won = winners.filter((name) => winner === name).length;
      }
    });
    return champion;
  };
  const WinnerComponent = ({ name, winner = true }) => {
    return (
      <>
        <span role="img" aria-label="quiz-winner">
          {winner ? "🏆" : "💩"}
        </span>
        {name}
        <span role="img" aria-hidden="true">
          {winner ? "🏆" : "💩"}
        </span>
      </>
    );
  };
  return (
    <div>
      {tableData.length > 0 && (
        <Styled.TableContainer>
          <Styled.Table>
            <thead>
              <Styled.TableHeaderRow>
                {Object.keys(tableData[0]).map((key) => (
                  <Styled.TableSegment>{key}</Styled.TableSegment>
                ))}
                <Styled.TableSegment>Quizzes played*</Styled.TableSegment>
                <Styled.TableSegment>Quizzes won</Styled.TableSegment>
              </Styled.TableHeaderRow>
            </thead>
            <Styled.TableBody>
              {tableData.slice(1).map((row) => (
                <Styled.TableRow>
                  {Object.keys(row).map((key, index) => {
                    const isWinner = winnerList[index] === row["Name"];
                    const isLoser = loserList[index] === row["Name"];
                    return (
                      <Styled.TableSegment
                        host={row[key] === HOST}
                        NA={row[key] === NA}
                        winner={isWinner}
                      >
                        {isWinner || isLoser ? (
                          <WinnerComponent name={row[key]} winner={isWinner} />
                        ) : (
                          row[key]
                        )}
                      </Styled.TableSegment>
                    );
                  })}
                  <Styled.TableSegment>
                    {
                      Object.keys(row).filter(
                        (score) =>
                          typeof row[score] === "number" || row[score] === HOST
                      ).length
                    }
                  </Styled.TableSegment>
                  <Styled.TableSegment>
                    {winnerList.filter((name) => row["Name"] === name).length}
                  </Styled.TableSegment>
                </Styled.TableRow>
              ))}
            </Styled.TableBody>
          </Styled.Table>
        </Styled.TableContainer>
      )}
      <Styled.WinnerText>
        <span role="img" aria-hidden="true">
          🎊🏆
        </span>
        Winning most times: {getChampion(winnerList)}
        <span role="img" aria-hidden="true">
          🎊🏆
        </span>
      </Styled.WinnerText>
      <Styled.WinnerText>
        <span role="img" aria-hidden="true">
          🎙️
        </span>
        Next Quiz host: {next}
        <span role="img" aria-hidden="true">
          🎤
        </span>
      </Styled.WinnerText>

      <Styled.WinnerText>
        <span role="img" aria-hidden="true">
          💩
        </span>
        Losing most times: {getChampion(loserList)}
        <span role="img" aria-hidden="true">
          💩
        </span>
      </Styled.WinnerText>
      <small>
        * Quizzes played only includes those that I have full result sets for. I
        am missing at least one (Quiz8)
      </small>
    </div>
  );
};
