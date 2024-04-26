import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextComponent from './textComponent';

const Comment = ({ avatarUser, userName, commentText }) => {
  return (
    <View style={styles.commentItem}>
      {/* Avatar user */}
      <Image source={avatarUser} style={styles.commentAvatar} />
      
      {/* Thông tin bình luận */}
      <View style={styles.commentContent}>
        <TextComponent style={styles.commentUsername}>{userName}</TextComponent>
        <TextComponent style={styles.commentText}>{commentText}</TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  commentAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  commentContent: {
    paddingLeft: 6,
  },
  commentUsername: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21.33,
    letterSpacing: -0.3,
    color: 'rgba(255, 255, 255, 1)',
    paddingBottom: 5   
  },
  commentText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    letterSpacing: -0.3,
    color: 'rgba(255, 255, 255, 1)'    
  },
});

export default Comment;
