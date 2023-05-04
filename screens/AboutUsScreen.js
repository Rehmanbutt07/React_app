import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutUsPage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
            // source={require('../assets/logo.png')}
            />
            <Text style={styles.title}>About Us</Text>
            <View style={styles.content}>
                <Text style={styles.description}>
                    At XYZ Company, we believe in providing high-quality products and services that meet the unique needs of our customers. Our team of experienced professionals is dedicated to delivering exceptional results and exceeding expectations every step of the way.
                </Text>
                <Text style={styles.historyTitle}>Our History</Text>
                <Text style={styles.historyDescription}>
                    XYZ Company was founded in 2005 by John Smith, a seasoned entrepreneur with a passion for innovation. Since then, we have grown into a leading provider of cutting-edge technology solutions, serving clients across a wide range of industries.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    historyDescription: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AboutUsPage;
