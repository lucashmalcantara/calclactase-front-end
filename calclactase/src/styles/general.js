import metrics from "./metrics";
import colors from "./colors";
import fonts from "./fonts";

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: fonts.regular,
    alignSelf: "center",
    marginBottom: metrics.doubleBaseMargin,
  },
  baseMargin: {
    margin: metrics.baseMargin,
  },
  baseMarginTop: {
    marginTop: metrics.baseMargin,
  },
  baseDoubleMarginTop: {
    marginTop: metrics.doubleBaseMargin,
  },
  largeTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
    flex: 0,
    textAlign: 'center',
  },
  defaultTitleAlignment: {
    textAlign: 'center',
  },
};

export default general;
