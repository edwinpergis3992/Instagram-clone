import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appBar: {
    // backgroundColor: 'red',
    paddingTop: 33,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  instaLogo: {
    height: 35,
    width: 115,
  },
  messengerLogo: {
    height: 22,
    width: 22,
  },
  userContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingBottom: 8

  },
  profile1: {
    width: 64,
  },
  userLogo1: {
    height: 64,
    width: 64,
    borderRadius: 64,
  },
  plusIcon: {
    position: 'absolute',
    right: 0,
    bottom: 18,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingLeft: 16
  },
  feedContainer: {
    borderTopWidth: 1,
    borderTopColor: '#cccdd5',
  },
  storyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 8
  },
  userStory: {
    height: 30,
    width: 30,
    borderRadius: 30
  },
  dot: {
    position: 'absolute',
    right: 10,
    top: 10

  },
  textStyle: {
    marginLeft: 8,
    fontSize: 14,
    top: 4
  },
  textStyle1: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    paddingTop: 4,
  },
  picStory: {
    height: 350,
    width: 360
  },
  iconStyle: {
    height: 24,
    width: 24,
  },
  saveComment: {
    height: 24,
    width: 24,
    marginRight: 6
  },
  commentLogo: {
    paddingLeft: 14,
  },
  storyComment: {
    paddingTop: 6,
    flexDirection: 'row'
  }
});

export default styles;