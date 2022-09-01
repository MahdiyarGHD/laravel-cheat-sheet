<template>

  <div class="container col-10">
    <Header />
      <div class="head-container">
      
        <div class="title">ایجاد یک پروژه جدید لاراولی</div>
        
        <Code style="margin-top:30px"
        code="composer create-project laravel/laravel example-app"/>
        
        <Subjects />
         
      </div>
      
      <div id="artisan" class="content-title">
        <div @click="redirect('#artisan')"> آرتیسان </div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code="// اجرای پروژه روی پورت دلخواه
php artisan serve --port 8000

// ساخت مجدد فایل های اتو فریمورک لاراول
php artisan dump-autoload

// بهینه‌سازی پروژه برای پرفورمنس بهتر 
php artisan optimize

// حذف کلاس های کامپایل شده    
php artisan clear-compiled

// بردن پروژه در حالت تعلیق
php artisan down

// در آوردن پروژه از حالت تعلیق
php artisan up

// ساخت یک کنترلر جدید
php artisan make:controller

// ساخت یک کلاس ایونت جدید
php artisan make:event

// ساخت یک کلاس ایمیل جدید
php artisan make:email

// ساخت یک کامند جدید آرتیسان
php artisan make:command

// ساخت یک میدِلوِر جدید
php artisan make:middleware

// دریافت راهنمایی درباره یک کامند
php artisan -h 
php artisan --help

// نمایش تغییرات فریمورک
php artisan changes

// کنسول تینکر به شما اجازه میده با استفاده از کامندلاین با پروژه لاراولی‌تون ارتباط برقرار کنید 
php artisan tinker

// .env نمایش محتویات فایل
php artisan env 

// خالی کردن کش پروژه
php artisan cache:clear

// تنظیم کلید پروژه 
php artisan key:generate

// ساخت یک کلاس ریکوئست جدید
php artisan make:request name

// برگرداندن میگریشن ها یک مرحله به عقب
php artisan migrate:rollback

// لیست تمامی روت های ثبت شده در پروژه
php artisan route:list

// نمایش لیست تمام کامند های آرتیسان
php artisan list"
 style="margin-top: 30px" class="language-php"
 />
 
 
       
      <div id="blade" class="content-title">
        <div @click="redirect('#blade')"> تمپلیت‌انجین </div> <div class="hashtag noselect"># </div>
      </div>

     <Code
 code="// Blade دستورات شرطی در تمپلیت انجین 
@unless
@endunless

@if
@endif

@else
@elseif

// Blade دستورات حلقه‌ای تمپلیت انجین 

@for
@endfor

@foreach
@endforeach

@while
@endwhile

// چاپ کردن محتوی در صفحه
{{ $var }}

// htmlspecialchars چاپ کردن محتوی در صفحه بدون در نظر گرفتن بحث
{!! $var !!}

//  چاپ کردن محتوی در صفحه با این تفاوت که اگر مقدار اول خالی باشد مقدار دوم چاپ می‌شود
{{{ $name or 'Default' }}}

// چاپ کردن محتوی حاوی کد های جاوااسکریپت در صفحه
@{{ $js_code }}

// استفاده از کد های پی‌اچ‌پی در تمپلیت انجین
@php
@endphp

// Header بارگذاری قسمت های پرتکرار سایت مانند 
// .blade.php بدون

@include('header')

@section('name')
@endsection

yield('name')

extends('name')"
 style="margin-top: 30px" class="language-php"
/>

      <div id="security" class="content-title">
        <div @click="redirect('#security')"> دستورات امنیتی </div> <div class="hashtag noselect"># </div>
      </div>

     <Code
 code="// هش کردن متن وارد شده توسط خود لاراول
Hash::make('SecretString')

// چک کردن هش شده بودن متن   
Hash::check('String', $hashedString)

// رمزنگاری با قابلیت بازگشایی متن توسط لاراول
Crypt::encrypt('secretstring')

// بازگشایی متن رمزنگاری شده توسط لاراول
Crypt::decrypt($encryptedString)

// تنظیم کردن حالت های رمزنگاری 
Crypt::setMode('ctr')
Crypt::setCipher($cipher)"

 style="margin-top: 30px" class="language-php"
 />
 

      <div id="helpers" class="content-title">
        <div @click="redirect('#helpers')">هلپر ها</div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code=" /* ---------- آرایه ها ---------- */


// به‌هم ریختن آیتم های موجود در یک آرایه به صورت رندوم
Arr::shuffle()

// تغییر/اضافه کردن یک مقدار و یک کلید در یک آرایه
$array = Arr::add(['name' => 'Desk'], 'price', 100);
// ['name' => 'Desk', 'price' => 100]


// مرتب کردن یک آرایه بر اساس حروف انگلیسی
Arr::sort($array);

// ترکیب یک آرایه از آرایه ها درون یک آرایه
Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


// جدا کردن کلید و مقدار های یک آرایه در دو آرایه
[$keys, $values] = Arr::divide(['name' => 'Desk']);

// css تبدیل یک آرایه به کلاس 
$array = ['p-4', 'font-bold' => $isActive, 'bg-red' => $hasError];
$classes = Arr::toCssClasses($array);
// 'p-4 bg-red' 


// فیلتر کردن یک آرایه بر اساس شرط داده شده
$array = [100, '200', 300, '400', 500];
$filtered = Arr::where($array, function ($value, $key) {
    return is_string($value);
});
// [1 => '200', 3 => '400']


// حذف یک کلید/مقدار از یک آرایه
$array = ['name' => 'Desk', 'price' => 100]
$filtered = Arr::except($array, ['price']);
// ['name' => 'Desk'] 


// فیلترکردن یک آرایه براساس کلید ها
$array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];
$slice = Arr::only($array, ['name', 'price']);
// ['name' => 'Desk', 'price' => 100]


// از یک آرایه null حذف تمام مقدار های 
$array = [0, null];
$filtered = Arr::whereNotNull($array);
// [0 => 0]


// بررسی وجود داشتن یک کلید در یک آرایه
$array = ['name' => 'John Doe', 'age' => 17];
$exists = Arr::exists($array, 'name');
// true


// تبدیل یک متن/عدد به آرایه
$string = 'Laravel';
$array = Arr::wrap($string);
// ['Laravel']


// اضافه کردن یک مقدار به اول آرایه
$array = ['one', 'two', 'three', 'four'];
$array = Arr::prepend($array, 'zero');
// ['zero', 'one', 'two', 'three', 'four']


// تبدیل یک آرایه به کوئری استرینگ
$array = [
    'name' => 'Taylor',
    'order' => [
        'column' => 'created_at',
        'direction' => 'desc'
    ]
];
Arr::query($array);
// name=Taylor&order[column]=created_at&order[direction]=desc


// برگرداندن یک مقدار به‌صورت رندوم از آرایه
$array = [1, 2, 3, 4, 5];
$random = Arr::random($array);
// 4 - (دریافت شده به‌صورت تصادفی)

// برگرداندن مقدار اولین ایندکس یک آرایه
$first = head($array);

// برگرداندن مقدار آخرین ایندکس یک آرایه
$last = last($array);



 /* ---------- رشته ها ---------- */
 
 
// localization دریافت ترجمه یک بخش با استفاده از 
echo __('Welcome to our application');
echo __('messages.welcome'); 


// جای گذاری موارد خواسته شده در یک پترن رجکس در متن با اعضای یک آرایه
$string = 'The event will take place between :start and :end';
$replaced = preg_replace_array('/:[a-z_]+/', ['8:30', '9:00'], $string);
// The event will take place between 8:30 and 9:00


// برگرداندن متن بعد یک مقدار رشته‌ای
$slice = Str::after('This is my name', 'This is');
// ' my name'


// برگرداندن متن قبل یک مقدار رشته‌ای
$slice = Str::before('This is my name', 'my name');
// 'This is '


// برگرداندن متن بین دو مقدار رشته‌ای
$slice = Str::between('This is my name', 'This', 'name');
// ' is my '


// camelCase برگرداندن مقدار وارد شده به‌صورت 
$converted = Str::camel('foo_bar');
// fooBar


// درصورت وجود رشته‌ی وارد شده در متن true برگرداندن مقدار  
$contains = Str::contains('This is my name', 'my');
// true


// درصورت اینکه رشته‌ی وارد شده در آخر متن باشد true برگرداندن مقدار
$result = Str::endsWith('This is my name', 'name');
// true


// HTML به  markdown تبدیل
$html = Str::inlineMarkdown('**Laravel**');
// <strong>Laravel</strong>


// باشد JSON اگر رشته‌ی وارد شده  true برگرداندن مقدار 
$result = Str::isJson('{``first``: ``John``, ``last``: ``Doe``}');
// true


// برگرداندن طول یک رشته
$length = Str::length('Laravel');


// اعمال محدودیت روی یک رشته بر اساس طول رشته 
$truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20);
// The quick brown fox...


// تبدیل حروف کوچک به حروف بزرگ در یک رشته
$converted = Str::lower('LARAVEL');


// پنهان کردن حروف رشته‌ی وارد شده بعد از مقدار مشخص شده در پارامتر سوم
$string = Str::mask('taylor@example.com', '*', 3); 
// tay***************


// حذف یک حرف از کل رشته
$string = 'Peter Piper picked a peck of pickled peppers.';
$removed = Str::remove('e', $string);
// Ptr Pipr pickd a pck of pickld ppprs.


// جای گذاری متن
$string = 'Laravel 8.x';
$replaced = Str::replace('8.x', '9.x', $string);
// Laravel 9.x


// جای گذاری موارد مشخص شده در متن با اعضای آرایه
$string = 'The event will take place between ? and ?';
$replaced = Str::replaceArray('?', ['8:30', '9:00'], $string);
// The event will take place between 8:30 and 9:0


// برعکس کردن متن 
$reversed = Str::reverse('Hello World');
// dlroW olleH


// حذف اسپیس های اضافی در رشته
$string = Str::squish('    laravel    framework    ');
// laravel framework


// TitleCase تبدیل یک رشته به  
$converted = Str::title('a nice title uses the correct case');
// A Nice Title Uses The Correct Case


// تبدیل حروف کوچک در متن به حروف بزرگ 
$string = Str::upper('laravel');
// LARAVEL


// شمردن تعداد کلمات در یک رشته
$string = Str::upper('laravel');
// LARAVEL


// درصورت وجود اعضای آرایه دریک رشته true برگرداندن مقدار 
$containsAll = Str::of('This is my name')->containsAll(['my', 'name']);
// true


 /* ---------- لینک‌ها ---------- */
 

// ساخت لینک برای یک متود از یک کنترولر
$url = action([HomeController::class, 'index']);

// asset ساخت لینک برای فایل های 
$url = asset('img/photo.jpg');

// دریافت لینک با استفاده از نام روت
$url = route('route.name');

// asset برای فایل های HTTPS ساخت لینک
$url = secure_asset('img/photo.jpg');

// با استفاده از نام روت HTTPS دریافت لینک
$url = secure_url('user/profile');


 /* ---------- متفرقه ---------- */


// HTTP exception هدایت کردن به یک
abort(403, 'Unauthorized.', $headers);

// در صورت صحیح بودن مقدار ورودی HTTP exception هدایت کردن به یک
abort_if(! Auth::user()->isAdmin(), 403);

// ساخت یک نمونه از کلاس احرازهویت
auth();
$user = auth()->user();


// هدایت کاربر به صفحه قبلی
return back();

// دریافت یک آیتم از کش
$value = cache('key');


// دریافت یک مقدار از کانفیگ پروژه
config();
$value = config('app.timezone'); 

// ساخت کوکی
$cookie = cookie('name', 'value', $minutes);

// CSRF ساخت یک اینپوت مخفی حاوی توکن 
csrf_field();
{{ csrf_field() }}


// CSRF دریافت توکن
$token = csrf_token();

// Env دریافت یک مقدار از تنظیمات 
env();

// ساخت اطلاعات فیک
fake();
{{ fake()->name() }}


// نوشتن لاگ
logger('Debug message');
logger('User has logged in.', ['id' => $user->id]);


// دریافت زمان فعلی
now();

// هدایت کاربر به یک مسیر/روت
return redirect('/home');
return redirect()->route('route.name');

// ایجاد یک نمونه از صحت‌سنج
$validator = validator($data, $rules, $messages);

// ایجاد یک نمونه از یک ویو
return view('auth.login');"
 style="margin-top: 30px" class="language-php"
 />


      <div id="files" class="content-title">
        <div @click="redirect('#files')">کار با فایل‌ها</div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code="// بررسی وجود داشتن یک آدرس
Storage::exists('your-path') 

// ویرایش محتوی یک فایل ( پارامتر اول آدرس فایل و پارامتر دوم محتوی ) 
Storage::put('file.jpg', $contents);

// افزودن متن به فایلی که آدرس آن در پارامتر اول قرار داده شده
Storage::append('file.log', 'Appended Text');

// (ورودی می‌تواند آرایه‌ای از نام فایل‌ها باشد) پاک کردن فایل توسط آدرس فایل 
Storage::delete('file.jpg');

// جابه‌جایی فایل از مکانی به مکان دیگر
Storage::move('old/file.jpg', 'new/file.jpg');

// کپی کردن فایل از مکانی به مکان دیگر
Storage::copy('old/file.jpg', 'new/file.jpg');

// ساخت یک لینک موقت برای فایل‌ها
$url = Storage::temporaryUrl(
    'file.jpg', now()->addMinutes(5)
);

//  دریافت تمام دایرکتوری های درون یک دایرکتوری
Storage::directories($directory);

//  دریافت لینک یک فایل
$url = Storage::url('file.jpg');

//  دریافت اخرین تاریخ ساخت/ویرایش یک فایل
Storage::lastModified('file.jpg');

// دریافت تمام فایل های یک دایرکتوری بصورت آرایه
Storage::files($directory);

// ساخت یک دایرکتوری
Storage::makeDirectory($directory);

// حذف یک دایرکتوری
Storage::deleteDirectory($directory);"
 style="margin-top: 30px" class="language-php"
 />

      <div id="auth" class="content-title">
        <div @click="redirect('#files')">احرازهویت</div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code="َ// چک کردن لاگین بودن کاربر 

Auth::check()
// مثال
if(Auth::check())
{
    // User Logined
}

// دریافت اطلاعات کاربر لاگین شده‌
Auth::user()

// دریافت آیدی کاربر لاگین شده
Auth::id()

// خارج کردن کاربر لاگین شده از حساب کاربری 
Auth::logout()

// لاگین کردن کاربر با استفاده از آيدی
Auth::loginUsingId(1)
Auth::login(User::find(1))

// Blade دستور شرطی بررسی لاگین بودن کاربر در تمپلیت انجین 
@auth
    // User Logined
@endauth

// ارسال یک یادآور پسورد برای کاربر 
Password::remind($credentials, function($message, $user){})

// 'ایجاد 'مرا به خاطر بسپار
Auth::attempt($credentials, true)

// بررسی صحت یک کاربر
Auth::validate($credentials)

// ساخت 'مرا به خاطر بسپار' با استفاده از ایمیل و پسورد کاربر‌‌ 
Auth::attempt(array('email' => $email, 'password' => $password))

// لاگین کردن کاربر فقط یک بار بدون ذخیره کردن کوکی 
Auth::once($credentials)"
 style="margin-top: 30px" class="language-php"
 />
 
 

      <div id="request" class="content-title">
        <div @click="redirect('#request')">Request کلاس</div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code="// دریافت نوع ریکوئست
Request::method()

// بررسی نوع یک ریکوئست با متود مشخص شده
Request::isMethod('post')

// دریافت پورت ریکوئست
Request::getPort()

// باشد json/* برگرداندن مقدار صحیح اگر هدر ریکوئست حاوی 
Request::isJson()

// دریافت ایپی کاربر 
Request::getClientIp()

// دریافت URi مسیر جاری 
Request->path()

// باشد aplication/json برگرداندن مقدار صحیح اگر هدر ریکوئست حاوی 
Request::wantsJson()

// دریافت ادرس جاری به صورت کامل
Request::url()"

 style="margin-top: 30px" class="language-php"
 />      
 
      <div id="loop" class="content-title">
        <div @click="redirect('#loop')">Loop متغیر</div> <div class="hashtag noselect"># </div>
      </div>
      
      <Code
 code="َ// در حلقه های تمپلیت انجین $loop متغیر

//  دریافت ایندکس فعلی حلقه ( از 0 شروع می‌شود )
@foreach ($posts as $post)
    Current index: {{ $loop->index }}
@endforeach


// دریافت تعداد دفعاتی که از چرخش حلقه باقی مانده است
@foreach ($posts as $post)
    {{ $loop->remaining }}
@endforeach


// دریافت تعداد کل آیتم های موجود در آرایه 
@foreach ($posts as $post)
    {{ $loop->count }}
@endforeach


// دریافت تعداد دفعاتی که تا به‌حال حلقه اجرا شده ( از یک شروع می‌شود )
@foreach ($posts as $post)
    {{ $loop->iteration }}
@endforeach


// ( Boolean ) تشخیص اولین چرخش حلقه 
@foreach ($posts as $post)
    @if ($loop->first)
    //
    @endif
@endforeach


// ( Boolean ) تشخیص آخرین چرخش حلقه 
@foreach ($posts as $post)
    @if ($loop->last)
     //
    @endif
@endforeach


// حلقه والد $loop برگرداندن مقدار   
@foreach ($posts as $post)
    @foreach($post->comments as $comment)
        {{ $loop->parent->iteration }}
    @endforeach
@endforeach"
 style="margin-top: 30px" class="language-php"
 />
      
      
  <Footer/>
  
  </div>
  
  <Stars />
  
</template>

<script>
import Header from './components/Header.vue'
import Stars from './components/Stars.vue'
import Code from './components/Code.vue'
import Subjects from './components/Subjects.vue'
import Footer from './components/Footer.vue'
import hljs from './assets/lib/highlightjs/highlight.min.js'

export default {
  name: 'Home',
  components: {
    Header,
    Stars,
    Code,
    Subjects,
    Footer
  },

  data() {
    return {
      title : "راهنمای فارسی لاراول"
    }
  },
  
  created() {
    document.title = this.title
  },
  
  mounted() {
    document.body.classList.add("drac-custom-scrollbar")
    hljs.highlightAll();
  },
  
  methods: {
    redirect(url) {
      window.location.href = url
    }
  },
  
}
</script>

<style lang="scss">
@import './assets/lib/highlightjs/styles/github-dark.min.css';
@import './assets/styles/app.scss';
</style>