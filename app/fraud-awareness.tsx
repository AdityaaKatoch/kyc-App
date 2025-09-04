import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft, Shield, TriangleAlert as AlertTriangle, Phone, MessageCircle, ExternalLink } from 'lucide-react-native';

const fraudTips = [
  {
    title: 'Never Share Your PIN',
    subtitle: 'अपना पिन कभी साझा न करें',
    description: 'Government officials will never ask for your PIN or OTP over phone calls.',
    icon: '🔒',
  },
  {
    title: 'Verify Official Websites',
    subtitle: 'आधिकारिक वेबसाइट सत्यापित करें',
    description: 'Always check the URL starts with https:// and has official government domain.',
    icon: '🌐',
  },
  {
    title: 'Beware of Fake Apps',
    subtitle: 'नकली ऐप्स से सावधान रहें',
    description: 'Download KYC apps only from official app stores and verified sources.',
    icon: '📱',
  },
  {
    title: 'No Upfront Payments',
    subtitle: 'कोई अग्रिम भुगतान नहीं',
    description: 'Legitimate KYC services never ask for money upfront or processing fees.',
    icon: '💰',
  },
];

const emergencyContacts = [
  { name: 'Cyber Crime Helpline', number: '1930', description: 'Report cyber fraud' },
  { name: 'UIDAI Helpline', number: '1947', description: 'Aadhaar related issues' },
  { name: 'Banking Fraud', number: '155260', description: 'Report banking fraud' },
];

export default function FraudAwarenessScreen() {
  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleReportFraud = () => {
    Linking.openURL('https://cybercrime.gov.in/');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#64748B" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.alertIcon}>
            <AlertTriangle size={40} color="#FFFFFF" />
          </View>
          <Text style={styles.title}>Fraud Awareness</Text>
          <Text style={styles.subtitle}>धोखाधड़ी की जागरूकता</Text>
          <Text style={styles.description}>
            Stay safe from KYC fraud and scams
          </Text>
        </View>

        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>⚠️ Important Warning</Text>
          <Text style={styles.warningText}>
            Government agencies will NEVER ask for money, PIN, or OTP over phone calls or messages. 
            If someone asks for these, it's a scam!
          </Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.sectionTitle}>Safety Tips / सुरक्षा सुझाव</Text>
          {fraudTips.map((tip, index) => (
            <View key={index} style={styles.tipCard}>
              <Text style={styles.tipIcon}>{tip.icon}</Text>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipSubtitle}>{tip.subtitle}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.contactsContainer}>
          <Text style={styles.sectionTitle}>Emergency Contacts / आपातकालीन संपर्क</Text>
          {emergencyContacts.map((contact, index) => (
            <TouchableOpacity
              key={index}
              style={styles.contactCard}
              onPress={() => handleCall(contact.number)}
            >
              <Phone size={20} color="#EF4444" />
              <View style={styles.contactContent}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactDescription}>{contact.description}</Text>
              </View>
              <Text style={styles.contactNumber}>{contact.number}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.reportButton} onPress={handleReportFraud}>
          <ExternalLink size={20} color="#FFFFFF" />
          <Text style={styles.reportButtonText}>Report Cyber Crime</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  alertIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#EF4444',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  warningCard: {
    backgroundColor: '#FEF2F2',
    borderColor: '#EF4444',
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 12,
  },
  warningText: {
    fontSize: 14,
    color: '#991B1B',
    lineHeight: 20,
  },
  tipsContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 12,
  },
  tipIcon: {
    fontSize: 32,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  tipSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 18,
  },
  contactsContainer: {
    marginBottom: 32,
  },
  contactCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    gap: 12,
  },
  contactContent: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 2,
  },
  contactDescription: {
    fontSize: 14,
    color: '#64748B',
  },
  contactNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  reportButton: {
    backgroundColor: '#EF4444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  reportButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomSpace: {
    height: 32,
  },
});