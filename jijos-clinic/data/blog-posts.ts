// ── Blog Post Data ─────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string; // ISO date
  readingTime: string;
  excerpt: string;
  content: string; // HTML content
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "monsoon-fevers-kerala-prevention-tips",
    title: "Monsoon Fevers in Kerala: How to Protect Your Family",
    seoTitle: "Monsoon Fever Prevention Tips Kerala | Dr. Jijo Jose M",
    seoDescription:
      "Learn how to protect your family from dengue, chikungunya, and other monsoon fevers in Kerala. Practical prevention tips from Dr. Jijo Jose M, Kasaragod.",
    date: "2026-06-15",
    readingTime: "4 min read",
    excerpt:
      "Every monsoon, Kerala sees a spike in fevers — dengue, chikungunya, leptospirosis, and viral infections. Here are practical steps to keep your family safe.",
    content: `
      <p>Kerala's monsoon season brings relief from the heat but also creates ideal conditions for mosquito breeding and waterborne infections. Every year, hospitals across Kasaragod and northern Kerala see a surge in cases of <strong>dengue, chikungunya, leptospirosis, typhoid, and various viral fevers</strong>.</p>

      <h2>Common Monsoon Fevers in Kerala</h2>
      <ul>
        <li><strong>Dengue:</strong> Spread by Aedes mosquitoes that breed in clean stagnant water — flower pots, tyres, water tanks. Symptoms include high fever, severe joint pain, and sometimes a rash.</li>
        <li><strong>Chikungunya:</strong> Also spread by Aedes mosquitoes. Causes debilitating joint pain that can last weeks.</li>
        <li><strong>Leptospirosis (Rat Fever):</strong> Contracted through contact with water or soil contaminated with animal urine. Common after flooding.</li>
        <li><strong>Typhoid:</strong> Spread through contaminated food and water. Causes sustained fever and abdominal discomfort.</li>
      </ul>

      <h2>Prevention Tips</h2>
      <ol>
        <li><strong>Eliminate stagnant water</strong> around your home — empty coolers, pots, and unused containers weekly.</li>
        <li><strong>Use mosquito repellent and nets</strong>, especially during dawn and dusk when Aedes mosquitoes are most active.</li>
        <li><strong>Drink boiled or filtered water</strong> and avoid street food during peak monsoon.</li>
        <li><strong>Wear protective footwear</strong> when walking through waterlogged areas to prevent leptospirosis.</li>
        <li><strong>Wash hands frequently</strong> and maintain good kitchen hygiene.</li>
        <li><strong>Keep your surroundings clean</strong> — clear drains, trim vegetation near windows.</li>
      </ol>

      <h2>When to See a Doctor</h2>
      <p>Don't wait if you have:</p>
      <ul>
        <li>Fever lasting more than 2–3 days</li>
        <li>High fever with severe headache or joint pain</li>
        <li>Vomiting, diarrhoea, or difficulty breathing alongside fever</li>
        <li>Fever after wading through floodwater</li>
      </ul>
      <p>Early diagnosis makes treatment simpler and prevents complications. A simple blood test can identify the cause in most cases.</p>

      <h2>Keep Your Family Safe This Monsoon</h2>
      <p>Most monsoon fevers are preventable with basic precautions. If you or a family member develops symptoms, don't self-medicate — especially with antibiotics. Consult a doctor for proper evaluation and treatment.</p>
    `,
    tags: ["monsoon", "fever", "dengue", "prevention", "Kerala"],
  },
  {
    slug: "living-with-diabetes-daily-tips",
    title: "Living with Diabetes: Practical Tips for Daily Life",
    seoTitle: "Diabetes Daily Management Tips | Dr. Jijo Jose M Kasaragod",
    seoDescription:
      "Practical daily tips for managing diabetes — from food choices to monitoring. Advice from Dr. Jijo Jose M, Consultant Physician in Kasaragod.",
    date: "2026-07-20",
    readingTime: "5 min read",
    excerpt:
      "Managing diabetes isn't just about medication. Small, consistent habits in food, exercise, and monitoring make a big difference every day.",
    content: `
      <p>A diabetes diagnosis can feel overwhelming, but with the right habits, most people manage it well and live active, fulfilling lives. Here are practical tips that work in everyday life — especially suited to our food habits and lifestyle in Kerala.</p>

      <h2>Food and Diet</h2>
      <ul>
        <li><strong>You don't have to give up rice.</strong> Reduce portion size, switch to boiled or brown rice when possible, and pair it with plenty of vegetables and dal.</li>
        <li><strong>Include protein in every meal</strong> — egg, fish, dal, or curd. Protein slows sugar absorption.</li>
        <li><strong>Limit sugar and maida (refined flour).</strong> This includes bakery items, biscuits, and sweetened tea.</li>
        <li><strong>Use coconut oil in moderation.</strong> It's part of our cuisine, but portion control matters if you also have high cholesterol.</li>
        <li><strong>Eat regular meals.</strong> Skipping meals can cause sugar fluctuations that are hard to manage.</li>
      </ul>

      <h2>Exercise</h2>
      <ul>
        <li><strong>Walk for 30 minutes daily.</strong> Brisk walking after dinner is a simple, effective habit.</li>
        <li><strong>Any movement counts.</strong> Gardening, taking stairs, cycling to the market — these add up.</li>
        <li><strong>Avoid long periods of sitting.</strong> Stand or walk for a few minutes every hour if you have a desk job.</li>
      </ul>

      <h2>Monitoring</h2>
      <ul>
        <li><strong>Check your blood sugar as advised by your doctor.</strong> Keep a simple log — a notebook or phone app works fine.</li>
        <li><strong>Get your HbA1c tested every 3 months.</strong> This gives a picture of your average sugar control.</li>
        <li><strong>Don't ignore foot care.</strong> Check your feet daily for cuts or sores. Wear comfortable, closed footwear.</li>
      </ul>

      <h2>Medication</h2>
      <ul>
        <li><strong>Take your medicine at the same time every day.</strong> Set a phone alarm if needed.</li>
        <li><strong>Never adjust dosage on your own</strong> — always consult your doctor before making changes.</li>
        <li><strong>Carry your medication list</strong> to every doctor visit, including for unrelated conditions.</li>
      </ul>

      <h2>Mental Health Matters</h2>
      <p>Living with a chronic condition can be stressful. Talk to your family, stay connected with friends, and don't hesitate to discuss emotional concerns with your doctor. Managing stress directly improves sugar control.</p>

      <h2>Regular Follow-ups</h2>
      <p>Even when you feel fine, regular check-ups help catch early changes in kidney function, eye health, and nerve function. Prevention is always easier than treatment.</p>
    `,
    tags: ["diabetes", "daily-tips", "diet", "exercise", "monitoring"],
  },
  {
    slug: "home-blood-pressure-monitoring-guide",
    title: "How to Monitor Blood Pressure at Home: A Simple Guide",
    seoTitle: "Home Blood Pressure Monitoring Guide | Dr. Jijo Jose M",
    seoDescription:
      "Step-by-step guide to accurate home blood pressure monitoring. Tips on choosing a monitor, correct technique, and when to see a doctor.",
    date: "2026-08-10",
    readingTime: "4 min read",
    excerpt:
      "Home blood pressure monitoring helps you and your doctor make better treatment decisions. Here's how to do it correctly.",
    content: `
      <p>Monitoring your blood pressure at home gives you and your doctor a much better picture than occasional clinic readings. It helps detect "white coat hypertension" (high readings only at the clinic) and ensures your medication is working throughout the day.</p>

      <h2>Choosing a Home BP Monitor</h2>
      <ul>
        <li><strong>Choose an upper arm (cuff) monitor</strong> — they are more accurate than wrist monitors.</li>
        <li><strong>Look for a validated brand</strong> — Omron, Dr. Morepen, or similar brands sold at reputable pharmacies.</li>
        <li><strong>Get the right cuff size.</strong> A cuff that's too small or too large gives inaccurate readings. Most monitors come with a standard cuff suitable for average arm sizes.</li>
        <li><strong>Budget:</strong> A reliable digital BP monitor costs ₹1,500–₹3,000 and lasts years.</li>
      </ul>

      <h2>How to Measure Correctly</h2>
      <ol>
        <li><strong>Sit quietly for 5 minutes</strong> before measuring. Don't smoke, drink coffee, or exercise for 30 minutes before.</li>
        <li><strong>Sit with your back supported</strong> and feet flat on the floor. Don't cross your legs.</li>
        <li><strong>Place the cuff on bare skin</strong>, about 2 cm above the elbow crease. The tube should run down the inside of your arm.</li>
        <li><strong>Rest your arm on a table</strong> so the cuff is at heart level.</li>
        <li><strong>Take 2 readings, 1 minute apart</strong>, and record the average.</li>
        <li><strong>Measure at the same time each day</strong> — morning (before medication) and evening are ideal.</li>
      </ol>

      <h2>Understanding Your Readings</h2>
      <ul>
        <li><strong>Normal:</strong> Below 120/80 mmHg</li>
        <li><strong>Elevated:</strong> 120–129 / less than 80 mmHg</li>
        <li><strong>High (Stage 1):</strong> 130–139 / 80–89 mmHg</li>
        <li><strong>High (Stage 2):</strong> 140/90 mmHg or higher</li>
        <li><strong>Crisis:</strong> Above 180/120 mmHg — seek immediate medical attention</li>
      </ul>

      <h2>Keeping a Record</h2>
      <p>Write your readings in a small notebook or use your phone's notes app. Record the date, time, and reading. Bring this log to every doctor visit — it's extremely helpful for adjusting your treatment plan.</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Measuring immediately after eating, exercise, or stress</li>
        <li>Talking or moving during measurement</li>
        <li>Using the monitor over clothing</li>
        <li>Panicking over a single high reading — look at trends over days</li>
      </ul>

      <h2>When to Call Your Doctor</h2>
      <p>Contact your doctor if your home readings are consistently above 140/90, if they're significantly different from clinic readings, or if you experience symptoms like headache, dizziness, or chest discomfort alongside high readings.</p>
    `,
    tags: ["blood-pressure", "monitoring", "home-care", "hypertension"],
  },
];

/** Utility: get a blog post by slug */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
