import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(2),
    },
    logo: {
      height: 30,
      maxWidth: 130,
    },
  },
}));

const name = {
  style: {
    color: "black",
  },
};

const list = {
  style: {
    paddingLeft: "2rem",
  },
};

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            <h4>Background:</h4>
          </Typography>
          <img src={"/logo.jpg"} alt="logo" className={classes.logo} />

          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Mission Oxygen Team (MOT) was established to fight challenges
            related to hospital equipment. Robotics Association of Nepal (RAN)
            and Biotechnology Society of Nepal and Biomedical Engineering
            Foundation Nepal (BEFN) are working together as a Mission Oxygen
            Team (MOT). MOT recruited biomedical engineers with the aim of
            installation operation, maintenance of medical devices and oxygen
            related equipment. MOT also has more than 100 engineers all over
            Nepal and will spread the service of MOT all over Nepal soon. MOT
            has just finished the work related to oxygen concentrator quality
            check at Kathmandu.
            <br /> <br />
            <b {...name}>Er. Bikash Gurung</b>
            <br />
            Executive Director || Board of Director ||
            <br /> MOT Management Committee President || RAN
            <br /> <br />
            <b {...name}>Mr.Nabin Munakarmi</b>
            <br />
            Country Director || Board of director || <br /> MOT Management
            Committee President || BSN
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            <h4>Activities:</h4>
          </Typography>
          <img src={"/NRNAa.jpg"} alt="logo" className={classes.logo} />
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            On 9 June 2021, MOT arranged training sessions for biomedical
            engineers with the help of Pawan Bioscientific Engineering Services
            ( PBES). Asst. Professor Er. Pawan Kumar Kam (Director of PBES) gave
            the training to Er.Amrit K.C, Er. Sandeep Gaywali, Er. Manish
            Ghimire, Er. Pooja Limbu, Er. Pooja Basnet.
            <br /> <br />
            After the training session, with the lead of Er. Pawan Kumar Kam,
            Mr. Nabin Munakarmi, Er. Bikash Gurung team of MOT went to the NRNA
            office to check the quality of 433 oxygen concentrators.
          </Typography>
          <br /> <br />
          <Typography gutterBottom variant="h5" component="h2">
            Oxygen Concentrator Inspection Report:
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            At the NRNA office, two companies' oxygen concentrators arrived. We
            checked two different types of company oxygen concentrators. One of
            them: <br />
            <br />
            Owgels® Oxygen Concentrator
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            After unpacking the carton, we properly checked following things:
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            1. Oxygen concentrator Machine.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            2. Any dents, scratches or other outer damages on the machine .
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            3. Humidification Bottle.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            4. Nasal cannulae.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            5. User’s manual.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            6. Warranty card.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            7. Atomization Components.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            8. Filter Bon.
          </Typography>
          <img src={"/NRNAAAA.jpg"} alt="logo" className={classes.logo} />
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            If any of these things were missing we noted down on the card report
            and notified our Biomedical Engineer Pawan Kumar Kam. <br /> <br />
            After that, we had done following things:
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            i. Given power supply to the oxygen concentrator.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            ii. This model has a digital monitor having alarm indicators like
            low pressure, low concentrator, and power.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            iii. In the control panel, digital display, on/off switch, power
            supply protection switch, oxygen exchange, timer switch.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            iv. Firstly, we connect the power cable plug into the power supply.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            v. We checked digital display that shows:
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              a. Flow rate per minute.
            </Typography>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              c. Timer.
            </Typography>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              d. Total time.
            </Typography>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              e. ww conc., low pressure, filter change indicator.
            </Typography>
          </div>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            vi. After a certain time running we tested the oxygen saturation
            purity using oxygen analyser.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            vii. We checked the flow meter.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            viii. We checked the nebulizer.
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <img src={"/NRNAAAAA.jpg"} alt="logo" className={classes.logo} />
          <br />
          <br />
          <br />
          <Typography gutterBottom variant="h5" component="h2">
            To check oxygen saturation Purity:
          </Typography>

          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            1. We poured water into the humidification bottle (between maximum
            and minimum indication level of bottle). We used distilled water
            into the bottle and tightened the bottle to prevent oxygen from
            escaping.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            2. Then attached the bottle into the machine oxygen outlet part.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            3. After that oxygen analyzer was connected to the humidifier oxygen
            output part. Then through an analyzer oxygen purity was measured on
            a different flow rate.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            4. Oxygen supply was also observed using cannula. One part of the
            cannula was connected to the humidification bottle oxygen supply
            part, and then another part was dipped into water.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            5. After switching on the power supply, we clicked on the oxygen
            button, then to maintain flow rate, we saw bubbling on water.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            6. Atomization supply was checked by connecting the atomization tube
            to the atomizing gas outlet of the oxygen concentrator.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            7. After the concentrator was powered, we observed all the function
            indications on manual and it was okay or good condition.
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            Results:
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            1. This machine has two humidification bottle connection parts.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            2. This machine supplied oxygen from two parts i.e. the left part
            supplied 10L/min while the right part didn't supply any oxygen.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            3. At 5L/min, both the right and left oxygen outlet part has given
            oxygen.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            4. At 10L/min, at average we had found 92-93%oxygen saturation
            purity.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            5. It took 5-6 sec to show on display.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            6. After starting the machine, at a certain time oxygen purity level
            was increased.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            7. Another timer was set up to run the machine and maximum time was
            set up to run the machine for 5 hours.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            8. Machine was portable and had a locked and unlocked wheel system.
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            Recommendations:
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            a. Preferably use only 10 liter i.e. left side oxygen outlet part in
            normal situation because during using both oxygen outlet parts
            slightly or minimally oxygen purity level decreases.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            b. Every 2/3 days, properly clean the humidifier bottle.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            c. Every 2/3 days, clean the backward foam filter to remove dust.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            <h4>Oxygen Concentrators:</h4>
            <div style={{ fontSize: "1rem" }}>
              <p>Model: XY-6S-10</p>
              <p>Manufacture: Shenzhen Hongninyuan Electronic Co.Ltd</p>
            </div>
          </Typography>

          <Typography gutterBottom variant="h5" component="h2">
            1. Unpacking Inspection:
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              a. Oxygen concentrator, (1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              b. Humidification bottle, (1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              c. Humidification Bottle connection tube,(1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              d. ntake filter,(1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              e. Nasal tube,(1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              f. Atomization Kit,(1)
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              g. Product manual,(1)
            </Typography>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            2 .Oxygen purity check:
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              a. Firstly, distilled water was poured into the humidification
              bottle, the water level was at a certain level as indicated in the
              bottle.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              b. After that the bottle was closed and put into the fixed seat on
              the back of the machine.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              c. One end of the wet bottle connection tube was connected to the
              humidification bottle inlet part and the other end to the oxygen
              outlet of the oxygen concentrator.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              d. The AC power cord of the machine was plugged into the power
              socket and the power switch was ON on the operation panel.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              e. We pressed the ‘Oxygen’ button on the operation panel of the
              machine and the machine had started.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              f. Oxygen analyzer pipe was inserted into the oxygen outlet of the
              humidification bottle, and then oxygen saturation purity was
              displayed on the oxygen analyzer.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              g. Atomization was also checked by connecting the atomizing part
              to the atomizing port.
            </Typography>
          </div>
          <br />

          <Typography gutterBottom variant="h5" component="h2">
            Observation:
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            <div style={{ fontSize: "1rem" }}>
              This machine has a digital display. This display has following
              indication:
            </div>
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              i. Power pilot lamp.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              ii. Sleep pilot lamp.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              iii. Low oxygen lamp.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              iv. Error pilot lamp.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              v. Cumulative time.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              vi. Timing.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              vii. Oxygen purity.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              viii. Oxygen flow.
            </Typography>
          </div>

          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            1. The oxygen outlet part was observed.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            2. Nebulizer/ Atomizing part was observed.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            3. Oxygen button.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            4. Timing +; timing-.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            5. Current overload protector.
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            color="textSecondary"
            component="p"
          >
            6. Switch.
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Results/ Findings:
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              1. Oxygen saturation purity level at 5L/min was app 94-95%.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              2. Oxygen concentration at 9L/min was app 92-93%.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              3. Oxygen concentration at 10L/min was app 88-90 %.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              4. When oxygen purity level decreased, there was indicator lamp
              which indicate low oxygen lamp.
            </Typography>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            Recommendations:
          </Typography>
          <div {...list}>
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              1. To get oxygen concentration at maximum flow rate, run the
              machine at least more than 10min.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              2. It is best recommended.
            </Typography>
            <br />
            <Typography
              align="justify"
              variant="body1"
              color="textSecondary"
              component="p"
            >
              4. to use this machine at 9L/min because at 10L it rarely gives
              more than 90% oxygen saturation.
            </Typography>
          </div>
          <br />
          <br />
          <img src={"OC.png"} alt="logo" className={classes.logo} />

          <img src={"/NRNAAA.jpg"} alt="logo" className={classes.logo} />
        </CardContent>
      </Card>
    </div>
  );
}
