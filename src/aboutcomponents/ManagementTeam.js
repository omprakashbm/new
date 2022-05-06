import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import { CardMedia } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "2.5%",
    paddingTop: "2%",
    backgroundColor: "hsl(205, 82%, 30%)",
    color: "white",
    borderRadius: "25px",
    backgroundImage: `url(${process.env.PUBLIC_URL + "oxygen.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top 35px right 0px",
    backgroundSize: "180px",
  },

  logo: {
    display: "flex",
    justifyContent: "center",
  },

  image: {
    height: "140px",
    width: "140px",
  },

  head: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    alignItems: "center",
    flexDirection: "column",
  },

  card: {
    padding: "20px",
    marginTop: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    cursor: "pointer",
  },

  members: {
    backgroundColor: "hsl(205, 78%, 40%)",
  },
  category: {
    backgroundColor: "transparent",
    color: "white",
    margin: 0,
    border: "1px dotted white",
    display: "flex",
    justifyContent: "center",
    borderRadius: "25px",
    padding: "10px",
    width: "200px",
  },
  categoryBotton: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
  },
  detail: {
    dispaly: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      boxShadow: " 0 5px 200px rgba(0, 0, 0, 0.1)",

      borderBottomRightRadius: "15px",
      borderBottomLeftRadius: "15px",
    },
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ManagementTeam = ({ category }) => {
  const [team, setTeam] = useState({});

  const classes = useStyle();

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/about/api/MOT/community/members/"
        );
        const data = await response.json();
        setTeam(data);
      } catch (error) {
        console.log("error");
      }
    };
    getMember();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.mainhead}>
        <div className={classes.logo}>
          <img src={"./logo.png"} alt="logo" />
        </div>

        <div>
          <p className={classes.head}>
            <h2 style={{ margin: 0 }}>MISSION OXYGEN TEAM</h2>
            <p style={{ marginTop: 0, marginBottom: 30 }}>
              Map, Monitor, Install, Operate, Repair and Maintain
            </p>
          </p>
        </div>
      </div>

      <div className={classes.categoryBotton}>
        <button className={classes.category}>{category}</button>
      </div>
      {/* make seperate js category file  according to the tams category and only then conmpare below */}
      <div className={classes.card}>
        {team.map((member, index) => {
          if (member.category === category) {
            return (
              <div className={classes.detail}>
                <CardMedia className={classes.image} image={member.image} />
                <div className={classes.info}>
                  <p style={{ marginTop: 7, marginBottom: 0 }}>{member.name}</p>

                  <p
                    style={{
                      marginTop: 0,
                      marginBotton: "1",
                    }}
                  >
                    {member.position}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ManagementTeam;
