import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import BackArrowIcon from '../assets/icon/backArrowIcon';
import Comment from '../components/comment';

export default function LiveStream() {

  const navigation = useNavigation();

  const commentData = [
    {
        avatarUser: require('../assets/images/doctor1.png'),
        userName: 'Everhart Tween',
        commentText: 'Thanks for shareing doctor',
    },

    {
      avatarUser: require('../assets/images/doctor1.png'),
      userName: 'Bonebrake Mash',
      commentText: 'They treat immune system disorders',
    },

    {
      avatarUser: require('../assets/images/doctor1.png'),
      userName: 'Bonebrake Mash',
      commentText: 'They treat immune system disorders',
    },

    {
      avatarUser: require('../assets/images/doctor1.png'),
      userName: 'Bonebrake Mash',
      commentText: 'They treat immune system disorders',
    },

    {
      avatarUser: require('../assets/images/doctor1.png'),
      userName: 'Bonebrake Mash',
      commentText: 'They treat immune system disorders',
    },

    {
      avatarUser: require('../assets/images/doctor1.png'),
      userName: 'Comfort Love',
      commentText: 'Depending on their education',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Phần header */}
      <View style={styles.header}>
        <BackArrowIcon onPress={() => navigation.goBack()} />

        {/* Avatar user */}
        <Image source={require('../assets/images/avatar_livestream.png')} style={styles.userAvatar} />
      </View>

      {/* Phần video livestream */}

      {/* Phần danh sách bình luận */}
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.commentContainer}>
          {
            commentData.map((comment, index)=>{
              return(
                <TouchableOpacity
                  key={index}
                  onPress={()=>{}}
                >
                  <Comment
                    avatarUser={comment.avatarUser}
                    userName={comment.userName}
                    commentText={comment.commentText}
                  />
                </TouchableOpacity>
              )
            })
          }
      </ScrollView>

      {/* Phần nhập bình luận */}
      <View style={styles.inputContainer}>
        {/* Icon message */}
        <View style={styles.iconWrapper}>
          <Image source={require('../assets/images/message.png')} style={styles.messageIcon} />
        </View>

        {/* Phần nhập bình luận */}
        <TextInput
          placeholder="Add Comment...."
          placeholderTextColor='rgba(103, 114, 148, 0.8)'
          style={styles.commentInput}
        />

        {/* Icon danh sách */}
        <View style={styles.iconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('../assets/images/iconShow.png')} style={styles.listIcon} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    backgroundColor: 'gray',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 9,
    paddingHorizontal: 20
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  videoContainer: {
    flex: 1,
    width: '100%',
  },

  commentContainer: {
    top: 314,
    paddingHorizontal: 20,
  },

  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },

  commentContent: {
    flex: 1,
  },

  commentUsername: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  commentText: {
    color: '#333',
  },

  inputContainer: {
    height: 54,
    borderRadius: 27,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20, 
    marginTop: 35,
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },


  messageIcon: {
    width: 44,
    height: 44,
    left: 5,
  },

  listIcon: {
    width: 18,
    height: 18,
    right: 20,
  },

  commentInput: {
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 115,
    paddingVertical: 18,
    color: 'rgba(103, 114, 148, 0.8)'
  },

});
