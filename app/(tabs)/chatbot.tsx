import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MessageCircle, Send, Volume2, Mic, CircleHelp as HelpCircle, Phone, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import { Linking } from 'react-native';

const quickQuestions = [
  'How do I upload my Aadhaar?',
  'Why is my face check failing?',
  'What documents do I need?',
  'Is my data safe?',
  'How to retry upload?',
  'What is DigiLocker?',
  'Report fraud / धोखाधड़ी रिपोर्ट करें',
  'Emergency help / आपातकालीन सहायता',
];

const chatMessages = [
  {
    id: 1,
    text: 'Hello! I\'m here to help you with your KYC process. What can I assist you with today? 🤗',
    isBot: true,
    timestamp: '10:30 AM'
  }
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(chatMessages);
  const [inputText, setInputText] = useState('');

  const generateBotResponse = (input) => {
    const responses = {
      aadhaar: 'To upload Aadhaar: 1) Take a clear photo 2) Ensure all corners are visible 3) Good lighting is important 4) File size should be under 2MB 📄✨',
      face: 'For face verification: 1) Remove glasses/mask 2) Look directly at camera 3) Ensure good lighting 4) Keep face centered 5) Don\'t move during capture 📸',
      documents: 'Required documents: Aadhaar Card (mandatory), PAN Card, and one address proof (Passport/Driving License/Utility Bill). All should be clear and valid! 📋',
      safe: 'Your data is 100% secure! We use bank-level encryption, comply with RBI guidelines, and never share your information. Your privacy is our priority! 🔒',
      retry: 'To retry: Go back to the previous screen and try again. If network is slow, try offline mode and sync later! 🔄',
      digilocker: 'DigiLocker is a government digital wallet that stores your official documents. It\'s the fastest way to complete KYC! 🏛️',
      fraud: '🚨 FRAUD ALERT: Never share your PIN/OTP with anyone! Government agencies never ask for money. Report fraud: Call 1930 (Cyber Crime Helpline) immediately!',
      emergency: '🆘 EMERGENCY CONTACTS:\n• Cyber Crime: 1930\n• UIDAI Helpline: 1947\n• Banking Fraud: 155260\nStay safe! 🛡️',
    };

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('aadhaar') || lowerInput.includes('upload')) return responses.aadhaar;
    if (lowerInput.includes('face') || lowerInput.includes('selfie')) return responses.face;
    if (lowerInput.includes('document') || lowerInput.includes('need')) return responses.documents;
    if (lowerInput.includes('safe') || lowerInput.includes('secure')) return responses.safe;
    if (lowerInput.includes('retry') || lowerInput.includes('again')) return responses.retry;
    if (lowerInput.includes('digilocker')) return responses.digilocker;
    if (lowerInput.includes('fraud') || lowerInput.includes('scam') || lowerInput.includes('धोखाधड़ी')) return responses.fraud;
    if (lowerInput.includes('emergency') || lowerInput.includes('help') || lowerInput.includes('आपातकालीन')) return responses.emergency;

    return 'I understand you need help! Can you ask me about uploading documents, face verification, or any specific KYC step? मैं आपकी मदद कर सकूंगा! 🤗';
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputText,
        isBot: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages([...messages, userMessage, botResponse]);
      setInputText('');
    }
  };

  const handleQuickQuestion = (question) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const botResponse = {
      id: messages.length + 2,
      text: generateBotResponse(question),
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage, botResponse]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <MessageCircle size={24} color="#3B82F6" />
          <View>
            <Text style={styles.headerTitle}>KYC Assistant</Text>
            <Text style={styles.headerSubtitle}>Always here to help • Online</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Volume2 size={20} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <HelpCircle size={20} color="#64748B" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.quickQuestions} horizontal showsHorizontalScrollIndicator={false}>
        {quickQuestions.map((question, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.quickQuestionButton}
            onPress={() => handleQuickQuestion(question)}
          >
            <Text style={styles.quickQuestionText}>{question}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <View key={message.id} style={[
            styles.messageWrapper,
            message.isBot ? styles.botMessageWrapper : styles.userMessageWrapper
          ]}>
            <View style={[
              styles.messageBubble,
              message.isBot ? styles.botMessage : styles.userMessage
            ]}>
              <Text style={[
                styles.messageText,
                message.isBot ? styles.botMessageText : styles.userMessageText
              ]}>
                {message.text}
              </Text>
            </View>
            <Text style={styles.timestamp}>{message.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your question here..."
            placeholderTextColor="#94A3B8"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.micButton}>
            <Mic size={20} color="#64748B" />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.emergencyBar}>
        <TouchableOpacity 
          style={styles.emergencyButton} 
          onPress={() => Linking.openURL('tel:1930')}
        >
          <AlertTriangle size={16} color="#EF4444" />
          <Text style={styles.emergencyText}>Report Fraud: 1930</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.emergencyButton} 
          onPress={() => Linking.openURL('tel:1800-XXX-XXXX')}
        >
          <Phone size={16} color="#16A34A" />
          <Text style={styles.emergencyText}>Support: 1800-XXX-XXXX</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1E293B',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#10B981',
    marginTop: 2,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#F8FAFC',
  },
  quickQuestions: {
    backgroundColor: '#F8FAFC',
    paddingVertical: 16,
    paddingLeft: 24,
  },
  quickQuestionButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  quickQuestionText: {
    fontSize: 14,
    color: '#475569',
    fontWeight: '500',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  messageWrapper: {
    marginBottom: 16,
  },
  botMessageWrapper: {
    alignItems: 'flex-start',
  },
  userMessageWrapper: {
    alignItems: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  botMessage: {
    backgroundColor: '#F1F5F9',
    borderBottomLeftRadius: 4,
  },
  userMessage: {
    backgroundColor: '#3B82F6',
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  botMessageText: {
    color: '#334155',
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    gap: 12,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    maxHeight: 100,
  },
  micButton: {
    padding: 4,
    marginLeft: 8,
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyBar: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,
    paddingVertical: 8,
    gap: 12,
  },
  emergencyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderRadius: 16,
    gap: 4,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  emergencyText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
});