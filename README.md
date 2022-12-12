- [LeetCode 刷题](#leetcode-刷题)
  - [刷题思路](#刷题思路)
    - [双指针解法](#双指针解法)
    - [滑动窗口解法](#滑动窗口解法)
  - [基础语法总结](#基础语法总结)
    - [Java 相关知识点](#java-相关知识点)
    - [JavaScript 知识点](#javascript-知识点)
    - [通用知识点](#通用知识点)

# LeetCode 刷题

---

## 刷题思路

### 双指针解法

通过使用两个指针来解决问题。
双指针解法常用于处理排序数组或链表中的问题，因为它能够有效地移动并处理数据。
例如，在排序数组中找到两个数之和等于某个给定值的情况，可以使用双指针解法，即通过设置两个指针指向数组的首尾元素，然后同时移动两个指针，当两个数之和等于给定值时停止移动并返回结果。

- [easy-26-删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)
- [easy-27-移除元素](https://leetcode.cn/problems/remove-element/)

### 滑动窗口解法

它通过移动窗口来解决问题。滑动窗口算法中的窗口是一个数组或字符串的子序列，通过移动窗口的起始位置和结束位置来不断扩大或缩小窗口的大小。滑动窗口算法常用于解决字符串或数组中的问题，如找出一个字符串中所有出现次数大于等于 k 的子串。在这种情况下，可以使用滑动窗口算法，即通过不断移动窗口的起始位置和结束位置来枚举字符串中的所有子串，并统计子串出现的次数，最后返回出现次数大于等于 k 的所有子串。

- [mid-03-无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

## 基础语法总结

### Java 相关知识点

- 定义一维数组 `int[] xxx = {};`
- 数组长度 `arr.length`
- for 循环 `for(int i = 0; i < len; i++) {// do something}`
- if 判断 `if(true) { // do something}`
<details>
    <summary>HashMap 基本用法</summary>

```java
// 定义哈希表
Map<Integer, Integer> map = new HashMap<Integer, Integer>();
// put 方法：用于添加了一个键值对
map.put(key, value);
//get 方法：用于获取指定键的值。
map.get(key)
//containsKey 方法：用于检查指定键是否存在于 HashMap 中。
map.containsKey(key)
//remove 方法：用于删除指定键的键值对。
map.remove(key)
```

</details>

### JavaScript 知识点

- 定义一维数组 `int arr = [];`
- 数组长度 `arr.length`
- for 循环 `for(let i = 0; i < len; i++) {// do something}`
- if 判断 `if(true) { // do something}`

<details>
    <summary>Map 基本用法</summary>

```javaScript
//定义 map `let map = new Map();`
//set 方法：用于添加了一个键值对 `map.set(key, value)`
//get 方法：用于获取指定键的值。 `map.get(key)`
//has 方法：用于检查指定键是否存在于 Map 中。 `map.has(key) // 返回bool`
//delete 方法：用于删除指定键的键值对。 `map.delete(key)`
```

</details>
<details>
    <summary>Set 基本用法</summary>

```javaScript
// 向Set添加成员
mySet.add('hello');
mySet.add(42);
mySet.add({ name: 'John' });

// 从Set删除成员
mySet.delete('hello');

// 查询Set成员
console.log(mySet.has(42)); // true
console.log(mySet.has('hello')); // false

// 获取Set成员数量
console.log(mySet.size); // 2
```

</details>
### 通用知识点

- % 10 来取个位数
- /= 10 去掉个位数

<details>
  <summary>% 取余运算符</summary>
    % 运算符用来求一个整数除以另一个整数的余数。例如：
    121 % 10 的结果是 1。
    120 % 10 的结果是 0。
    1234 % 10 的结果是 4。
    1234 % 100 的结果是 34。
</details>
<details>
  <summary>/= 运算符</summary>
    /= 运算符是赋值运算符的一种，用于将一个整数除以另一个整数，并将结果赋值给左边的变量。例如：
    126 /= 10 的结果是 12。
    120 /= 10 的结果是 12。
    1234 /= 10 的结果是 123。
    1234 /= 100 的结果是 12。
</details>
