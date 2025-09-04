import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MessageCircle, Send, Volume2, Mic, CircleHelp as HelpCircle } from 'lucide-react-native';

const quickQuestions = [
  'How do I upload my Aadhaar?',
  'Why is my face check failing?',
  'What documents do I need?',
  'Is my data safe?',
  'How to retry upload?',
  'What is DigiLocker?',
];

const chatMessages = [
  {
    id: 1,
    type: 'bot',
    text: 'नमस्ते! Hello! I\'m here to help you with your KYC process. Ask me anything!',
    time: '2:30 PM',
  },
];

export default function ChatbotScreen() {
  const [messages, setMessages] = useState(chatMessages);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      const botResponse = {
        id: messages.length + 2,
        type: 'bot' as const,
        text: getBotResponse(inputText),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, userMessage, botResponse]);
      setInputText('');
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // In real app, would start voice recognition
  };

  const getBotResponse = (input: string): string => {
    const responses = {
      aadhaar: 'To upload Aadhaar: Go to Document Upload → Take Photo → Place your Aadhaar card in the frame → Click capture. Make sure lighting is good! 📷',
      face: 'Face verification might fail due to poor lighting, wearing sunglasses, or not following instructions. Try in a well-lit area and follow each step carefully! 😊',
      documents: 'You can upload: Aadhaar Card, PAN Card, Driving License, Voter ID, or Passport. DigiLocker is fastest! 📄',
      safe: 'Your data is completely safe! We use bank-level encryption and follow UIDAI guidelines. Your information is never shared without permission. 🔒',
      retry: 'To retry: Go back to the previous screen and try again. If network is slow, try offline mode and sync later! 🔄',
      digilocker: 'DigiLocker is a government digital wallet that stores your official documents. It\'s the fastest way to complete KYC! 🏛️',
    };

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('aadhaar') || lowerInput.includes('upload')) return responses.aadhaar;
    if (lowerInput.includes('face') || lowerInput.includes('selfie')) return responses.face;
    if (lowerInput.includes('document') || lowerInput.includes('need')) return responses.documents;
    if (lowerInput.includes('safe') || lowerInput.includes('secure')) return responses.safe;
    if (lowerInput.includes('retry') || lowerInput.includes('again')) return responses.retry;
    if (lowerInput.includes('digilocker')) return responses.digilocker;

    return 'I understand you need help! Can you ask me about uploading documents, face verification, or any specific KYC step? मैं आपकी मदद कर सकूंगा! 🤗';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MessageCircle size={28} color="#2563EB" />
        <Text style={styles.title}>AI Helper</Text>
        <Text style={styles.subtitle}>एआई सहायक</Text>
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
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.type === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={[
              styles.messageText,
              message.type === 'user' ? styles.userMessageText : styles.botMessageText,
            ]}>
              {message.text}
            </Text>
            <Text style={styles.messageTime}>{message.time}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder="Type your question... / अपना प्रश्न लिखें..."
            placeholderTextColor="#94A3B8"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity
            style={[styles.voiceButton, isListening && styles.voiceButtonActive]}
            onPress={handleVoiceInput}
          >
            {isListening ? <Volume2 size={20} color="#FFFFFF" /> : <Mic size={20} color="#64748B" />}
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
  },
  quickQuestions: {
    paddingLeft: 24,
    marginBottom: 20,
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
    color: '#2563EB',
    fontWeight: '500',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '85%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2563EB',
    borderRadius: 16,
    borderBottomRightRadius: 4,
    padding: 12,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userMessageText: {
    color: '#FFFFFF',
  },
  botMessageText: {
    color: '#1E293B',
  },
  messageTime: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-end',
    gap: 12,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
    maxHeight: 100,
    paddingVertical: 8,
  },
  voiceButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceButtonActive: {
    backgroundColor: '#EF4444',
  },
  sendButton: {
    width: 44,
    height: 44,
    backgroundColor: '#2563EB',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});