import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'expo-image-picker';
import { auth, collection, addDoc, db, doc, ref, uploadString, getDownloadURL } from '../firebase'
// import 'firebase/firestore';
// import firestore from '@react-native-firebase/firestore';



const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.View`
  width: 80%;
  height: 200px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;

const UploadText = styled.Text`
  font-size: 16px;
  color: #aaa;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  background-color: #007aff;
  align-items: center;
  justify-content: center;
`;

const SubmitButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const FancyPage = () => {
    const [accountAddress, setAccountAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        // Do something with the form data and image
        try {
            console.log('we here')
            // Authenticate user with Firebase and get user ID
            // const dbRef = collection(db, "users");
            // const data = {
            //     name: "Raja Tamil",
            //     country: "Canada"
            // };
            // addDoc(dbRef, data)
            // const postsRef = collection(db, "posts");

            // To add a new post to Firestore:
            const postsRef = collection(db, "posts");

            console.log(postsRef)

            const newPost = {
                content: "This is the user-generated content.",
                userId: "user123",
                timestamp: new Date(),
            };

            addDoc(postsRef, newPost);
            const userId = auth.currentUser.uid;
            const userRef = doc(db, "users", userId);
            const postDoc = await addDoc(postsRef, newPost);
            console.log(postDoc)
            const postId = postDoc.id;
            // await updateDoc(userRef, { posts: [...posts, postId] });
            // const imagesRef = ref(storage, "images");
            // await uploadString(imagesRef.child(image), image, result.assets[0].uri);

            // const usersCollection = firestore().collection('Users');
            // console.log('here', userId, usersCollection)
            // Save user data to Firestore
            // await firestore().collection('Users').doc(userId).set({
            //     'account address': accountAddress,
            //     'amount': amount,
            // });


            // // Save image to Firebase storage and get download URL
            // if (image) {
            //     const storageRef = initializeApp.storage().ref(`users/${userId}/image.jpg`);
            //     const response = await fetch(image);
            //     const blob = await response.blob();
            //     await storageRef.put(blob);
            //     const imageUrl = await storageRef.getDownloadURL();
            //     await initializeApp.firestore().collection('users').doc(userId).update({
            //         image: imageUrl,
            //     });
            // }

            // // Reset form fields and image state
            // setAccountAddress('');
            // setAmount('');
            // setImage(null);

            // // Display success message to user
            // alert('User data saved successfully');
        } catch (error) {
            console.error('Error saving user data: ', error);
        }
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Container>
                <Input
                    placeholder="Account Address"
                    placeholderTextColor="#999"
                    onChangeText={text => setAccountAddress(text)}
                    value={accountAddress}
                />
                <Input
                    placeholder="Amount"
                    placeholderTextColor="#999"
                    onChangeText={text => setAmount(text)}
                    value={amount}
                />
                <SubmitButton onPress={handleSubmit}>
                    <SubmitButtonText>Submit</SubmitButtonText>
                </SubmitButton>
            </Container>
        </KeyboardAvoidingView>
    );
};

export default FancyPage;
