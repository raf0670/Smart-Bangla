
// Simple symptom-disease mapping
const diseaseMap = {
    'জ্বর': ['ফ্লু', 'ডেঙ্গু'],
    'কাশি': ['সর্দি', 'নিউমোনিয়া'],
    'মাথাব্যথা': ['মাইগ্রেন', 'টাইফয়েড'],
    // Add more as needed
};

document.getElementById('checkBtn').addEventListener('click', function () {
    const symptom = document.getElementById('symptomInput').value.trim();
    const resultDiv = document.getElementById('chatbotResult');
    resultDiv.innerHTML = ''; // Clear previous

    if (symptom && diseaseMap[symptom]) {
        let diseases = diseaseMap[symptom]
            .map(name => `<li>${name}</li>`)
            .join('');
        resultDiv.innerHTML = `<b>সম্ভাব্য রোগ:</b><ul class="disease-list">${diseases}</ul>`;
    } else if (symptom) {
        resultDiv.innerHTML = `<span style="color:#a22;">দুঃখিত, এই লক্ষণের জন্য তথ্য নেই</span>`;
    }
});