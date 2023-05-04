import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function WalletBalance(props) {
    return (
        <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Text style={styles.balanceAmount}>{props.balance}</Text>
        </View>
    );
}

function HomePage() {
    const balance = 1234.56; // Replace with your actual wallet balance

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Wallet</Text>
            <WalletBalance balance={balance} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    balanceContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    balanceLabel: {
        fontSize: 16,
    },
    balanceAmount: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});

export default HomePage;
