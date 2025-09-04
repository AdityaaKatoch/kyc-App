import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Volume2, Check } from 'lucide-react-native';

const languages = [
  { code: 'hi', name: 'हिन्दी', english: 'Hindi' },
  { code: 'en', name: 'English', english: 'English' },
  { code: 'ta', name: 'தமிழ்', english: 'Tamil' },
  { code: 'te', name: 'తెలుగు', english: 'Telugu' },
  { code: 'bn', name: 'বাংলা', english: 'Bengali' },
  { code: 'mr', name: 'मराठी', english: 'Marathi' },
  { code: 'gu', name: 'ગુજરાતી', english: 'Gujarati' },
  { code: 'kn', name: 'ಕನ್ನಡ', english: 'Kannada' },
];

export default function LanguageSelection() {
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const handleContinue = () => {
    router.push('/onboarding');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Choose Your Language</Text>
        <Text style={styles.subtitle}>अपनी भाषा चुनें</Text>
      </View>

      <ScrollView style={styles.languageList} showsVerticalScrollIndicator={false}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language.code}
            style={[
              styles.languageItem,
              selectedLanguage === language.code && styles.languageItemSelected,
            ]}
            onPress={() => setSelectedLanguage(language.code)}
          >
            <View style={styles.languageContent}>
              <Text style={styles.languageName}>{language.name}</Text>
              <Text style={styles.languageEnglish}>{language.english}</Text>
            </View>
            {selectedLanguage === language.code && (
              <Check size={24} color="#16A34A" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={[
          styles.voiceToggle,
          voiceEnabled && styles.voiceToggleActive,
        ]}
        onPress={() => setVoiceEnabled(!voiceEnabled)}
      >
        <Volume2 size={24} color={voiceEnabled ? '#FFFFFF' : '#2563EB'} />
        <Text style={[
          styles.voiceToggleText,
          voiceEnabled && styles.voiceToggleTextActive,
        ]}>
          Voice Guidance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue / आगे बढ़ें</Text>
      </TouchableOpacity>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
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
  },
  languageList: {
    flex: 1,
    marginBottom: 24,
  },
  languageItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  languageItemSelected: {
    borderColor: '#16A34A',
    backgroundColor: '#F0FDF4',
  },
  languageContent: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  languageEnglish: {
    fontSize: 14,
    color: '#64748B',
  },
  voiceToggle: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2563EB',
    marginBottom: 24,
    gap: 8,
  },
  voiceToggleActive: {
    backgroundColor: '#2563EB',
  },
  voiceToggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2563EB',
  },
  voiceToggleTextActive: {
    color: '#FFFFFF',
  },
  continueButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});