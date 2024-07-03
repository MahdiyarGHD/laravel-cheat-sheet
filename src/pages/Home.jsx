import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import MasonryItem from "../components/MasonryItem";
import '../assets/fonts/Icomoon/style.css';
import Codeblock from "../components/Codeblock.jsx";
import DescriptiveCodeTable from "../components/DescriptiveCodeTable.jsx";
import Footer from "../components/Footer.jsx";
import Masonry from 'react-masonry-css'
import React, { useEffect, useState } from "react";
import ReactDOMServer from 'react-dom/server'
import { isNullOrEmpty } from "../lib/utils.jsx";
import {
    Table,
    TableRow,
    TableRowItem
} from '../components/Table';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion.jsx"
  
const Home = () => {
    
    var [filterableItems, setFilterableItems] = useState([])
    useEffect(() => {
        setFilterableItems(items);
    }, [])
    
    const filterJSXByInnerHTML = (jsxArray, regexPattern) => {
        return jsxArray.filter(jsx => {
          if (React.isValidElement(jsx)) {
            const rawHTML = ReactDOMServer.renderToStaticMarkup(jsx);
            const regex = new RegExp(regexPattern, 'gi');
            return regex.test(rawHTML);
          }
          return false;
        });
      };
      
    
    const onSearchInputChange = (value) => {
        if (isNullOrEmpty(value))
            setFilterableItems(items)
        
        const filteredItems = filterJSXByInnerHTML(items, value);
        setFilterableItems(filteredItems);
    }
      
    
    const breakpointColumnsObj = {
        default: 3,
        1024: 2,
        700: 1
      };
    
      const items = [
        <MasonryItem title="ایجاد یک پروژه جدید لاراولی">
            <Codeblock>
                composer create-project laravel/laravel example-app
            </Codeblock>
        </MasonryItem>,
        
        <MasonryItem title="آرتیسان">
            <p className="pt-2">
            آرتیسان یک رابط خط فرمان است که در لاراول استفاده شده است.
            </p>
            <DescriptiveCodeTable>
                <TableRow>
                    <TableRowItem>
                    اجرای پروژه روی پورت دلخواه
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan serve --port 8000</Codeblock>
                    </TableRowItem>
                </TableRow>
                
                <TableRow>
                    <TableRowItem>
                    ساخت مجدد فایل های اتو فریمورک لاراول
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan dump-autoload</Codeblock>
                    </TableRowItem>
                </TableRow>
                
                <TableRow>
                    <TableRowItem>
                    بهینه‌سازی پروژه برای پرفورمنس بهتر 
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan optimize</Codeblock>
                    </TableRowItem>
                </TableRow>
                
                <TableRow>
                    <TableRowItem>
                    حذف کلاس های کامپایل شده 
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan clear-compiled</Codeblock>
                    </TableRowItem>
                </TableRow>
                
                <TableRow>
                    <TableRowItem>
                        بردن پروژه در حالت تعلیق
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan down</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        در آوردن پروژه از حالت تعلیق
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan up</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک کنترلر جدید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:controller</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک کلاس ایونت جدید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:event</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک کلاس ایمیل جدید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:email</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک کامند جدید آرتیسان
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:command</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک میدِلوِر جدید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:middleware</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        دریافت راهنمایی درباره یک کامند
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan -h</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        نمایش تغییرات فریمورک
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan changes</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        کنسول تینکر به شما اجازه میده با استفاده از کامندلاین با پروژه لاراولی‌تون ارتباط برقرار کنید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan tinker</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                         نمایش محتویات فایل .env
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan env</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        خالی کردن کش پروژه
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan cache:clear</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        تنظیم کلید پروژه
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan key:generate</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        ساخت یک کلاس رکوئست جدید
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan make:request name</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        برگرداندن میگریشن ها یک مرحله به عقب
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan migrate:rollback</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        نمایش لیست تمامی روت های ثبت شده در پروژه
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan route:list</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        نمایش لیست تمام دستورات آرتیسان
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock hasHighlight={false}>php artisan list</Codeblock>
                    </TableRowItem>
                </TableRow>
            </DescriptiveCodeTable>
        </MasonryItem>,
        
        <MasonryItem title="تمپلیت‌انجین">
            <p className="pt-2">
            Blade یک تمپلیت انجین ساده و درعین حال قدرتمند است که در لاراول گنجانده شده است.
            </p>
            
            <p className="pt-5">
            دستورات شرطی در تمپلیت‌انجین Blade
            </p>
            
            <Codeblock language="php">
                {`
                @unless
                @endunless             
                
                @if
                @endif

                @else
                @elseif
                `}
            </Codeblock>
            
            <p className="pt-8">
             دستورات حلقه‌ای تمپلیت انجین Blade
            </p>
            
            <Codeblock language="php">
                {`
                @for
                @endfor

                @foreach
                @endforeach

                @while
                @endwhile
                `}
            </Codeblock>
            
            <p className="pt-8">
            چاپ کردن محتوا در صفحه
            </p>
            
            <Codeblock language="php">
                {`
                {{ $var }}
                {{{ $name or 'Default' }}} 
                `}
            </Codeblock>
            
            <p className="pt-8">
             چاپ کردن محتوی در صفحه بدون در نظر گرفتن بحث htmlspecialchars
            </p>
            
            <Codeblock language="php">
                {`
                {!! $var !!}
                `}
            </Codeblock>
            
            <p className="pt-8">
            چاپ کردن محتوای حاوی کدهای جاوااسکریپت در صفحه
            </p>
            
            <Codeblock language="php">
                {`
                @{{ $js_code }}
                `}
            </Codeblock>
            
            <p className="pt-8">
            استفاده از کدهای پی‌اچ‌پی در تمپلیت‌انجین
            </p>
            
            <Codeblock language="php">
                {`
                @php
                @endphp
                `}
            </Codeblock>
            
            <p className="pt-8">
              بارگذاری قسمت های پرتکرار سایت مانند Header 
            </p>
            <p>
              بدون پسوند فایل .php.blade
            </p>
            
            <Codeblock language="php">
                {`
                @include('header')

                @section('name')
                @endsection

                yield('name')

                extends('name')
                `}
            </Codeblock>
            <p className="pt-2"></p>
        </MasonryItem>,
        
        <MasonryItem title="دستورات امنیتی">
            <p className="pt-2">
                لاراول قصد دارد پیاده‌سازی احراز هویت و رمزنگاری را بسیار ساده کند.
            </p>
            
            <p className="pt-5">
                هش کردن متن وارد شده توسط خود لاراول    
            </p>
            
            <Codeblock language="php">
                {`
                Hash::make('SecretString')
                `}
            </Codeblock>
            
            <p className="pt-5">
                بررسی هش شده بودن متن    
            </p>
            
            <Codeblock language="php">
                {`
                Hash::check('String', $hashedString)
                `}
            </Codeblock>
            
            <p className="pt-5">
                رمزنگاری با قابلیت بازگشایی متن توسط لاراول
            </p>
            
            <Codeblock language="php">
                {`
                Crypt::encrypt('secretstring')
                Crypt::decrypt($encryptedString)
                `}
            </Codeblock>
            
            <p className="pt-5">
                تنظیم کردن حالت‌های رمزنگاری 
            </p>
            
            <Codeblock language="php">
                {`
                Crypt::setMode('ctr')
                Crypt::setCipher($cipher)
                `}
            </Codeblock>
            
            <p className="pt-2"></p>
        </MasonryItem>,
        
        <MasonryItem title="هِلپِر ها">
            <p className="pt-2">
                لاراول شامل انواع مختلفی از توابع همگانی کمک‌کننده‌ی PHP است.
            </p>
            
            <Accordion className="mt-2" type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>آرایه‌ها</AccordionTrigger>
                    <AccordionContent>
                        <p className="pt-5">
                            به‌هم ریختن آیتم های موجود در یک آرایه به‌صورت تصادفی
                        </p>
                        <Codeblock language="php">
                            {`
                            Arr::shuffle()
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تغییر/اضافه کردن یک مقدار و یک کلید در یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = Arr::add(['name' => 'Desk'], 'price', 100);
                            // ['name' => 'Desk', 'price' => 100']
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            مرتب کردن یک آرایه بر اساس حروف انگلیسی
                        </p>
                        <Codeblock language="php">
                            {`
                            Arr::sort($array);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ترکیب یک آرایه از آرایه‌ها درون یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
                            // [1, 2, 3, 4, 5, 6, 7, 8, 9]
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            جدا کردن کلید و مقدار‌های یک آرایه در دو آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            [$keys, $values] = Arr::divide(['name' => 'Desk']);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                             تبدیل یک آرایه به کلاس CSS 
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = ['p-4', 'font-bold' => $isActive, 'bg-red' => $hasError];
                            $classes = Arr::toCssClasses($array);
                            // 'p-4 bg-red'
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            فیلتر کردن یک آرایه بر اساس شرط داده شده
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = [100, '200', 300, '400', 500];
                            $filtered = Arr::where($array, function ($value, $key) {
                                return is_string($value);
                            });
                            // [1 => '200', 3 => '400']
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            حذف یک کلید/مقدار از یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = ['name' => 'Desk', 'price' => 100];
                            $filtered = Arr::except($array, ['price']);
                            // ['name' => 'Desk']
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            فیلترکردن یک آرایه براساس کلید ها
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];
                            $slice = Arr::only($array, ['name', 'price']);
                            // ['name' => 'Desk', 'price' => 100]
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            حذف تمام مقادیر نال از یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = [0, null];
                            $filtered = Arr::whereNotNull($array);
                            // [0 => 0]
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            بررسی وجود داشتن یک کلید در یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = ['name' => 'John Doe', 'age' => 17];
                            $exists = Arr::exists($array, 'name');
                            // true
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل یک متن/عدد به آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = 'Laravel';
                            $array = Arr::wrap($string);
                            // ['Laravel']
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            اضافه کردن یک مقدار به اول آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = ['one', 'two', 'three', 'four'];
                            $array = Arr::prepend($array, 'zero');
                            // ['zero', 'one', 'two', 'three', 'four']
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل یک آرایه به کوئری استرینگ
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = [
                                'name' => 'Taylor',
                                'order' => [
                                    'column' => 'created_at',
                                    'direction' => 'desc'
                                ]
                            ];
                            Arr::query($array);
                            // name=Taylor&order[column]=created_at&order[direction]=desc
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن یک مقدار به‌صورت رندوم از آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $array = [1, 2, 3, 4, 5];
                            $random = Arr::random($array);
                            // 4 - (دریافت شده به‌صورت تصادفی)
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن مقدار اولین ایندکس یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $first = head($array);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن مقدار آخرین ایندکس یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $last = last($array);
                            `}
                        </Codeblock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>رشته‌ها</AccordionTrigger>
                    <AccordionContent>
                        <p className="pt-5">
                             دریافت ترجمه یک بخش با استفاده از localization
                        </p>
                        <Codeblock language="php">
                            {`
                            echo __('Welcome to our application');
                            echo __('messages.welcome');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            جای‌گذاری موارد خواسته شده در یک پترن رجکس در متن با اعضای یک آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = 'The event will take place between :start and :end';
                            $replaced = preg_replace_array('/:[a-z_]+/', ['8:30', '9:00'], $string);
                            // The event will take place between 8:30 and 9:00
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن متن بعد یک مقدار رشته‌ای
                        </p>
                        <Codeblock language="php">
                            {`
                            $slice = Str::after('This is my name', 'This is');
                            // ' my name'
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن متن قبل یک مقدار رشته‌ای
                        </p>
                        <Codeblock language="php">
                            {`
                            $slice = Str::before('This is my name', 'my name');
                            // 'This is '
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن متن بین دو مقدار رشته‌ای
                        </p>
                        <Codeblock language="php">
                            {`
                            $slice = Str::between('This is my name', 'This', 'name');
                            // ' is my '
                            `}
                        </Codeblock>

                        <p className="pt-5">
                             برگرداندن مقدار وارد شده به‌صورت camelCase
                        </p>
                        <Codeblock language="php">
                            {`
                            $converted = Str::camel('foo_bar');
                            // fooBar
                            `}
                        </Codeblock>

                        <p className="pt-5">
                          برگرداندن مقدار true درصورت وجود رشته‌ی وارد شده در متن
                        </p>
                        <Codeblock language="php">
                            {`
                            $contains = Str::contains('This is my name', 'my');
                            // true
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            در صورت این‌که رشته‌ی وارد شده در آخر متن باشد مقدار true برگردانده می‌شود
                        </p>
                        <Codeblock language="php">
                            {`
                            $result = Str::endsWith('This is my name', 'name');
                            // true
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل Markdown به HTML
                        </p>
                        <Codeblock language="php">
                            {`
                            $html = Str::inlineMarkdown('**Laravel**');
                            // <strong>Laravel</strong>
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن مقدار true درصورت این‌که رشته‌ی وارد شده یک نوع داده‌ی JSON باشد
                        </p>
                        <Codeblock language="php">
                            {`
                            $result = Str::isJson('{"first": "John", "last": "Doe"}');
                            // true
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برگرداندن طول یک رشته
                        </p>
                        <Codeblock language="php">
                            {`
                            $length = Str::length('Laravel');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            اعمال محدودیت روی یک رشته بر اساس طول رشته 
                        </p>
                        <Codeblock language="php">
                            {`
                            $truncated = Str::limit('The quick brown fox jumps over the lazy dog', 20);
                            // The quick brown fox...
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل حروف کوچک به حروف بزرگ در یک رشته
                        </p>
                        <Codeblock language="php">
                            {`
                            $converted = Str::lower('LARAVEL');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            پنهان کردن حروف رشته‌ی وارد شده بعد از مقدار مشخص شده در پارامتر سوم
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = Str::mask('taylor@example.com', '*', 3);
                            // tay***************
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            حذف یک حرف از کل رشته
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = 'Peter Piper picked a peck of pickled peppers.';
                            $removed = Str::remove('e', $string);
                            // Ptr Pipr pickd a pck of pickld ppprs.
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            جای گذاری متن
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = 'Laravel 8.x';
                            $replaced = Str::replace('8.x', '9.x', $string);
                            // Laravel 9.x
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            جای گذاری موارد مشخص شده در متن با اعضای آرایه
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = 'The event will take place between ? and ?';
                            $replaced = Str::replaceArray('?', ['8:30', '9:00'], $string);
                            // The event will take place between 8:30 and 9:00
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            برعکس کردن متن 
                        </p>
                        <Codeblock language="php">
                            {`
                            $reversed = Str::reverse('Hello World');
                            // dlroW olleH
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            حذف اسپیس‌های اضافی در رشته
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = Str::squish('    laravel    framework    ');
                            // laravel framework
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل یک رشته به TitleCase 
                        </p>
                        <Codeblock language="php">
                            {`
                            $converted = Str::title('a nice title uses the correct case');
                            // A Nice Title Uses The Correct Case
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            تبدیل حروف کوچک در متن به حروف بزرگ 
                        </p>
                        <Codeblock language="php">
                            {`
                            $string = Str::upper('laravel');
                            // LARAVEL
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            شمردن تعداد کلمات در یک رشته
                        </p>
                        <Codeblock language="php">
                            {`
                            $count = Str::wordCount('This is a sentence.');
                            // 4
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            درصورت وجود اعضای یک آرایه در یک رشته مقدار true برگردانده می‌شود
                        </p>
                        <Codeblock language="php">
                            {`
                            $containsAll = Str::of('This is my name')->containsAll(['my', 'name']);
                            // true
                            `}
                        </Codeblock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>لینک‌ها</AccordionTrigger>
                    <AccordionContent>
                        <p className="pt-5">
                            دریافت لینک یک اکشنِ کنترلر
                        </p>
                        <Codeblock language="php">
                            {`
                            $url = action([HomeController::class, 'index']);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ساخت لینک برای فایل های asset
                        </p>
                        <Codeblock language="php">
                            {`
                            $url = asset('img/photo.jpg');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            دریافت لینک با استفاده از نام مسیر
                        </p>
                        <Codeblock language="php">
                            {`
                            $url = route('route.name');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ساخت لینک HTTPS برای فایل های asset
                        </p>
                        <Codeblock language="php">
                            {`
                            $url = secure_asset('img/photo.jpg');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            دریافت لینک HTTPS با استفاده از نام مسیر
                        </p>
                        <Codeblock language="php">
                            {`
                            $url = secure_url('user/profile');
                            `}
                        </Codeblock>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem isBarHidden={true} value="item-4">
                    <AccordionTrigger>متفرقه</AccordionTrigger>
                    <AccordionContent>
                        <p className="pt-5">
                             هدایت کردن به یک HTTP exception
                        </p>
                        <Codeblock language="php">
                            {`
                            abort(403, 'Unauthorized.', $headers);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            هدایت کردن به یک HTTP exception درصورت true بودن مقدار ورودی
                        </p>
                        <Codeblock language="php">
                            {`
                            abort_if(! Auth::user()->isAdmin(), 403);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ساخت یک نمونه از کلاس احرازهویت
                        </p>
                        <Codeblock language="php">
                            {`
                            auth();
                            $user = auth()->user();
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            هدایت کاربر به صفحه قبلی
                        </p>
                        <Codeblock language="php">
                            {`
                            return back();
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            دریافت یک آیتم از کش
                        </p>
                        <Codeblock language="php">
                            {`
                            $value = cache('key');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            دریافت یک مقدار از کانفیگ پروژه
                        </p>
                        <Codeblock language="php">
                            {`
                            config();
                            $value = config('app.timezone');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ساخت کوکی
                        </p>
                        <Codeblock language="php">
                            {`
                            $cookie = cookie('name', 'value', $minutes);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                             ساخت یک اینپوت مخفی حاوی توکن CSRF
                        </p>
                        <Codeblock language="php">
                            {`
                            csrf_field();
                            {{ csrf_field() }}
                            `}
                        </Codeblock>

                        <p className="pt-5">
                             دریافت توکن CSRF
                        </p>
                        <Codeblock language="php">
                            {`
                            $token = csrf_token();
                            `}
                        </Codeblock>

                        <p className="pt-5">
                             دریافت یک مقدار از تنظیمات env
                        </p>
                        <Codeblock language="php">
                            {`
                            env();
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ساخت اطلاعات فیک
                        </p>
                        <Codeblock language="php">
                            {`
                            fake();
                            {{ fake()->name() }}
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            نوشتن لاگ
                        </p>
                        <Codeblock language="php">
                            {`
                            logger('Debug message');
                            logger('User has logged in.', ['id' => $user->id]);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            دریافت زمان فعلی
                        </p>
                        <Codeblock language="php">
                            {`
                            now();
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            هدایت کاربر به یک مسیر/روت
                        </p>
                        <Codeblock language="php">
                            {`
                            return redirect('/home');
                            return redirect()->route('route.name');
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ایجاد یک نمونه از صحت‌سنج
                        </p>
                        <Codeblock language="php">
                            {`
                            $validator = validator($data, $rules, $messages);
                            `}
                        </Codeblock>

                        <p className="pt-5">
                            ایجاد یک نمونه از یک ویو
                        </p>
                        <Codeblock language="php">
                            {`
                            return view('auth.login');
                            `}
                        </Codeblock>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </MasonryItem>,
        
        
        <MasonryItem title="کلاس Request">
            <p className="pt-2">لاراول یک روش شئ‌گرا برای تعامل با «درخواست‌های HTTP» فعلی که توسط برنامه شما نیز مدیریت می‌شود ارائه می‌کند.</p>
            <DescriptiveCodeTable>
                <TableRow>
                    <TableRowItem>
                        دریافت نوع رکوئست
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::method()</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        بررسی نوع یک ریکوئست با متود مشخص شده
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::isMethod('post')</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        دریافت پورت ریکوئست
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::getPort()</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        برگرداندن مقدار صحیح اگر هدر ریکوئست حاوی json/*
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::isJson()</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        دریافت ایپی کاربر 
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::getClientIp()</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        دریافت URi مسیر جاری 
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">{`Request->path()`}</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        برگرداندن مقدار صحیح اگر هدر ریکوئست حاوی aplication/json باشد
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::wantsJson()</Codeblock>
                    </TableRowItem>
                </TableRow>

                <TableRow>
                    <TableRowItem>
                        دریافت آدرس جاری به صورت کامل
                    </TableRowItem>
                    <TableRowItem>
                        <Codeblock language="php">Request::url()</Codeblock>
                    </TableRowItem>
                </TableRow>
            </DescriptiveCodeTable>

        </MasonryItem>,
        <MasonryItem title="کار با فایل‌ها">
            <p className="pt-2">
            لاراول به لطف پکیج بی‌نظیرِ Flysystem یک سیستم مدیریت فایل قدرتمند ارائه می‌دهد.
            </p>
            
            <p className="pt-5">
                بررسی وجود داشتن یک آدرس
            </p>
            <Codeblock language="php">
                {`
                Storage::exists('your-path');
                `}
            </Codeblock>

            <p className="pt-5">
                ویرایش محتوا یک فایل (پارامتر اول آدرس فایل و پارامتر دوم محتوا) 
            </p>
            <Codeblock language="php">
                {`
                Storage::put('file.jpg', $contents);
                `}
            </Codeblock>

            <p className="pt-5">
                افزودن متن به فایلی که آدرس آن در پارامتر اول قرار داده شده
            </p>
            <Codeblock language="php">
                {`
                Storage::append('file.log', 'Appended Text');
                `}
            </Codeblock>

            <p className="pt-5">
                (ورودی می‌تواند آرایه‌ای از نام فایل‌ها باشد) پاک کردن فایل توسط آدرس فایل 
            </p>
            <Codeblock language="php">
                {`
                Storage::delete('file.jpg');
                `}
            </Codeblock>

            <p className="pt-5">
                جابه‌جایی فایل از مکانی به مکان دیگر
            </p>
            <Codeblock language="php">
                {`
                Storage::move('old/file.jpg', 'new/file.jpg');
                `}
            </Codeblock>

            <p className="pt-5">
                کپی کردن فایل از مکانی به مکان دیگر
            </p>
            <Codeblock language="php">
                {`
                Storage::copy('old/file.jpg', 'new/file.jpg');
                `}
            </Codeblock>

            <p className="pt-5">
                ساخت یک لینک موقت برای فایل‌ها
            </p>
            <Codeblock language="php">
                {`
                $url = Storage::temporaryUrl(
                    'file.jpg', now()->addMinutes(5)
                );
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت تمام دایرکتوری های درون یک دایرکتوری
            </p>
            <Codeblock language="php">
                {`
                Storage::directories($directory);
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت لینک یک فایل
            </p>
            <Codeblock language="php">
                {`
                $url = Storage::url('file.jpg');
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت اخرین تاریخ ساخت/ویرایش یک فایل
            </p>
            <Codeblock language="php">
                {`
                Storage::lastModified('file.jpg');
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت تمام فایل های یک دایرکتوری بصورت آرایه
            </p>
            <Codeblock language="php">
                {`
                Storage::files($directory);
                `}
            </Codeblock>

            <p className="pt-5">
                ساخت یک دایرکتوری
            </p>
            <Codeblock language="php">
                {`
                Storage::makeDirectory($directory);
                `}
            </Codeblock>

            <p className="pt-5">
                حذف یک دایرکتوری
            </p>
            <Codeblock language="php">
                {`
                Storage::deleteDirectory($directory);
                `}
            </Codeblock>
            <p className="pt-2"></p>
        </MasonryItem>,
        
        
        <MasonryItem title="احراز هویت">
            <p className="pt-2">
            لاراول در تلاش است تا ابزارهایی را که برای اجرای سریع، ایمن و آسان «احراز هویت» نیاز دارید در اختیار شما قرار دهد.            </p>
            
            <p className="pt-5">
                چک کردن لاگین بودن کاربر
            </p>

            <Codeblock language="php">
                {`
                Auth::check()

                // مثال
                if(Auth::check())
                {
                    // User Logined
                }
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت اطلاعات کاربر لاگین شده‌
            </p>

            <Codeblock language="php">
                {`
                Auth::user()
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت آیدی کاربر لاگین شده
            </p>

            <Codeblock language="php">
                {`
                Auth::id()
                `}
            </Codeblock>

            <p className="pt-5">
                خارج کردن کاربر لاگین شده از حساب کاربری
            </p>

            <Codeblock language="php">
                {`
                Auth::logout()
                `}
            </Codeblock>

            <p className="pt-5">
                لاگین کردن کاربر با استفاده از آيدی
            </p>

            <Codeblock language="php">
                {`
                Auth::loginUsingId(1)
                Auth::login(User::find(1))
                `}
            </Codeblock>

            <p className="pt-5">
                 دستور شرطی بررسی لاگین بودن کاربر در تمپلیت انجین Blade
            </p>

            <Codeblock language="php">
                {`
                @auth
                    // User Logined
                @endauth
                `}
            </Codeblock>

            <p className="pt-5">
                ارسال یک یادآور پسورد برای کاربر
            </p>

            <Codeblock language="php">
                {`
                Password::remind($credentials, function($message, $user){})
                `}
            </Codeblock>

            <p className="pt-5">
                ایجاد 'مرا به خاطر بسپار'
            </p>

            <Codeblock language="php">
                {`
                Auth::attempt($credentials, true)
                `}
            </Codeblock>

            <p className="pt-5">
                بررسی صحت مشخصات یک کاربر
            </p>

            <Codeblock language="php">
                {`
                Auth::validate($credentials)
                `}
            </Codeblock>

            <p className="pt-5">
                ایجاد 'مرا به خاطر بسپار' با استفاده از ایمیل و پسورد کاربر‌‌
            </p>

            <Codeblock language="php">
                {`
                Auth::attempt(array('email' => $email, 'password' => $password))
                `}
            </Codeblock>

            <p className="pt-5">
                لاگین کردن کاربر فقط یک بار بدون ذخیره کردن کوکی
            </p>

            <Codeblock language="php">
                {`
                Auth::once($credentials)
                `}
            </Codeblock>
           
            <p className="pt-3"></p>
        </MasonryItem>,
        
        <MasonryItem title="متغیر Loop">
            <p className="pt-2">در حین تکرار در یک حلقه foreach، یک متغیر <span className="font-[monospace]">loop$</span> در حلقه شما دردسترس خواهد بود.</p>
            <p className="pt-5">
              دریافت ایندکس فعلی حلقه (از 0 شروع می‌شود)
            </p>
            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    Current index: {{ $loop->index }}
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت تعداد دفعاتی که از چرخش حلقه باقی مانده است
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    {{ $loop->remaining }}
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت تعداد کل آیتم های موجود در آرایه
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    {{ $loop->count }}
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                دریافت تعداد دفعاتی که تا به‌حال حلقه اجرا شده (از یک شروع می‌شود)
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    {{ $loop->iteration }}
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                تشخیص اولین چرخش حلقه (Boolean) 
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    @if ($loop->first)
                    //
                    @endif
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                 تشخیص آخرین چرخش حلقه (Boolean) 
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    @if ($loop->last)
                    //
                    @endif
                @endforeach
                `}
            </Codeblock>

            <p className="pt-5">
                برگرداندن مقدار <span className="font-[monospace]">loop$</span> حلقه‌ی والد
            </p>

            <Codeblock language="php">
                {`
                @foreach ($posts as $post)
                    @foreach($post->comments as $comment)
                        {{ $loop->parent->iteration }}
                    @endforeach
                @endforeach
                `}
            </Codeblock>
            <p className="pt-1"></p>
        </MasonryItem>
        ,
      ];
    
    return <>
        <Header />
        <div dir="rtl" className="w-full mt-10 text-white/70 font-bold text-2xl text-center">
            برگه‌تقلب‌ لاراول
        </div>
        <SearchInput onChange={(v) => onSearchInputChange(v.target.value)} />
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            >
            {filterableItems.map((o) => <div key={crypto.randomUUID()}>{o}</div>)}
        </Masonry>
        <Footer />
    </>
}

export default Home;